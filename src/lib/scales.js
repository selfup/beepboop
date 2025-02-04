import * as CONSTANTS from './constants';
import { allNotes, nextNote } from './notes';

export const Scale = (root, pattern) => ({ root, pattern });

export const scaleNotes = (root, pattern) => {
  let result = [root];

  let currentNote = root;

  for (let interval of pattern.intervals) {
    for (let i = 0; i < interval; i++) {
      currentNote = nextNote(currentNote.name);
    }

    result.push(currentNote);
  }

  return result;
};

export const transpose = (name, semitones) => {
  const notes = allNotes();

  const currentIndex = notes.findIndex((note) => note.name === name);

  const newIndex =
    (currentIndex + semitones + notes.length) % notes.length;

  return notes[newIndex];
};

export const transposeForAltoSax = (root, pattern) => {
  const altoSaxTranspose = 9;

  return scaleNotes(root, pattern).map((note) =>
    transpose(note.name, altoSaxTranspose),
  );
};

export const transposeForTenorSax = (root, pattern) => {
  const tenorSaxTranspose = 2;

  return scaleNotes(root, pattern).map((note) => {
    return transpose(note.name, tenorSaxTranspose);
  });
};

export const toFretOnString = (name, lowestStringNote) => {
  const notes = allNotes();

  const stringIndex = notes.findIndex(
    (note) => note.name === lowestStringNote,
  );

  const noteIndex = notes.findIndex((note) => note.name === name);

  return (noteIndex - stringIndex + 12) % 12;
};

export const toFretsOnString = (root, pattern, lowestStringNote) => {
  const notes = scaleNotes(root, pattern).map((note) =>
    toFretOnString(note.name, lowestStringNote),
  );

  let firstNote = 0;
  let goAbove12 = false;

  return notes.map((note, idx) => {
    if (idx === 0) {
      firstNote = note;
    }

    if (note < firstNote) {
      goAbove12 = true;
    }

    if (idx > 0 && note === firstNote) {
      goAbove12 = true;
    }

    if (goAbove12) {
      return note + 12;
    } else {
      return note;
    }
  });
};

export const modeScales = [
  CONSTANTS.MAJOR,
  CONSTANTS.HARMONIC_MINOR,
  CONSTANTS.MELODIC_MINOR,
];

export const derivedMode = (notes, mode) => {
  let newNotes = [...notes];

  switch (mode) {
    case CONSTANTS.DORIAN:
      swapper(newNotes, 1);
      break;
    case CONSTANTS.PHRYGIAN:
      swapper(newNotes, 2);
      break;
    case CONSTANTS.LYDIAN:
      swapper(newNotes, 3);
      break;
    case CONSTANTS.MIXOLYDIAN:
      swapper(newNotes, 4);
      break;
    case CONSTANTS.AEOLIAN:
      swapper(newNotes, 5);
      break;
    case CONSTANTS.LOCRIAN:
      swapper(newNotes, 6);
      break;
    default:
      swapper(newNotes, 0);
  }

  return newNotes;
};

export const swapper = (newNotes, swaps, swapCount = 0) => {
  if (swaps === swapCount) return;

  newNotes.shift();
  newNotes.push(newNotes[0]);

  swapper(newNotes, swaps, swapCount + 1);
};

export const scaleNames = [
  CONSTANTS.MAJOR,
  CONSTANTS.MINOR,
  CONSTANTS.HARMONIC_MINOR,
  CONSTANTS.MELODIC_MINOR,
  CONSTANTS.HUNGARIAN_MINOR,
  CONSTANTS.PENTATONIC_MAJOR,
  CONSTANTS.PENTATONIC_MINOR,
  CONSTANTS.BLUES,
  CONSTANTS.DORIAN,
  CONSTANTS.PHRYGIAN,
  CONSTANTS.LYDIAN,
  CONSTANTS.MIXOLYDIAN,
  CONSTANTS.LOCRIAN,
  CONSTANTS.WHOLE_TONE,
  CONSTANTS.PROMETHEUS,
  CONSTANTS.OVERTONE,
  CONSTANTS.NEAPOLITAN_MAJOR,
  CONSTANTS.NEAPOLITAN_MINOR,
  CONSTANTS.GYPSY,
  CONSTANTS.SPANISH_GYPSY,
  CONSTANTS.ARABIC,
  CONSTANTS.BALINESE,
  CONSTANTS.PERSIAN,
  CONSTANTS.EGYPTIAN,
  CONSTANTS.JAPANESE_IN_SEN,
  CONSTANTS.YO_SCALE,
  CONSTANTS.IWATO,
  CONSTANTS.HIRAJOSHI,
  CONSTANTS.CHINESE,
];
