import * as CONSTANTS from './constants';

export const keyNames = [
  CONSTANTS.C,
  CONSTANTS.C_SHARP,
  CONSTANTS.D,
  CONSTANTS.D_SHARP,
  CONSTANTS.E,
  CONSTANTS.F,
  CONSTANTS.F_SHARP,
  CONSTANTS.G,
  CONSTANTS.G_SHARP,
  CONSTANTS.A,
  CONSTANTS.A_SHARP,
  CONSTANTS.B,
];

export const scaleNames = [
  CONSTANTS.MAJOR,
  CONSTANTS.MINOR,
  CONSTANTS.HARMONIC_MINOR,
  CONSTANTS.MELODIC_MINOR,
  CONSTANTS.DORIAN,
  CONSTANTS.PHRYGIAN,
  CONSTANTS.LYDIAN,
  CONSTANTS.MIXOLYDIAN,
  CONSTANTS.LOCRIAN,
  CONSTANTS.AEOLIAN,
  CONSTANTS.WHOLE_TONE,
  CONSTANTS.PENTATONIC_MAJOR,
  CONSTANTS.PENTATONIC_MINOR,
  CONSTANTS.BLUES,
  CONSTANTS.CHROMATIC,
  CONSTANTS.HUNGARIAN_MINOR,
  CONSTANTS.PERSIAN,
  CONSTANTS.JAPANESE_IN_SEN,
  CONSTANTS.YO_SCALE,
  CONSTANTS.BALINESE,
  CONSTANTS.PELOG,
  CONSTANTS.PROMETHEUS,
  CONSTANTS.OVERTONE,
  CONSTANTS.ARABIC,
  CONSTANTS.NEAPOLITAN_MAJOR,
  CONSTANTS.NEAPOLITAN_MINOR,
  CONSTANTS.GYPSY,
  CONSTANTS.SPANISH_GYPSY,
  CONSTANTS.HIRAJOSHI,
  CONSTANTS.IWATO,
  CONSTANTS.EGYPTIAN,
  CONSTANTS.CHINESE,
];

export class Note {
  constructor(name) {
    this.name = name;
  }

  static all() {
    return [
      new Note(CONSTANTS.C),
      new Note(CONSTANTS.C_SHARP),
      new Note(CONSTANTS.D),
      new Note(CONSTANTS.D_SHARP),
      new Note(CONSTANTS.E),
      new Note(CONSTANTS.F),
      new Note(CONSTANTS.F_SHARP),
      new Note(CONSTANTS.G),
      new Note(CONSTANTS.G_SHARP),
      new Note(CONSTANTS.A),
      new Note(CONSTANTS.A_SHARP),
      new Note(CONSTANTS.B),
    ];
  }

  next() {
    const allNotes = Note.all();
    const currentIndex = allNotes.findIndex((note) => note.name === this.name);
    return allNotes[(currentIndex + 1) % allNotes.length];
  }

  transpose(semitones) {
    const allNotes = Note.all();
    const currentIndex = allNotes.findIndex((note) => note.name === this.name);
    const newIndex =
      (currentIndex + semitones + allNotes.length) % allNotes.length;
    return allNotes[newIndex];
  }

  toFretOnString(lowestStringNote) {
    const allNotes = Note.all();
    const eIndex = allNotes.findIndex((note) => note.name === lowestStringNote);
    const noteIndex = allNotes.findIndex((note) => note.name === this.name);
    return (noteIndex - eIndex + 12) % 12;
  }
}

export function derivedMode(notes, mode) {
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
}

export function swapper(newNotes, swaps) {
  const swapArray = [...new Array(swaps)];

  swapArray.forEach((_, idx) => {
    newNotes.shift();
    newNotes.push(newNotes[idx]);
  });
}

export class ScalePattern {
  constructor(name, intervals) {
    this.name = name;
    this.intervals = intervals;
  }

  static allPatterns() {
    return [
      new ScalePattern(CONSTANTS.MAJOR, [2, 2, 1, 2, 2, 2, 1]),
      new ScalePattern(CONSTANTS.MINOR, [2, 1, 2, 2, 1, 2, 2]),
      new ScalePattern(CONSTANTS.MELODIC_MINOR, [2, 1, 2, 2, 2, 2, 1]),
      new ScalePattern(CONSTANTS.HARMONIC_MINOR, [2, 1, 2, 2, 1, 3, 1]),
      new ScalePattern(CONSTANTS.DORIAN, [2, 1, 2, 2, 2, 1, 2]),
      new ScalePattern(CONSTANTS.PHRYGIAN, [1, 2, 2, 2, 1, 2, 2]),
      new ScalePattern(CONSTANTS.LYDIAN, [2, 2, 2, 1, 2, 2, 1]),
      new ScalePattern(CONSTANTS.MIXOLYDIAN, [2, 2, 1, 2, 2, 1, 2]),
      new ScalePattern(CONSTANTS.LOCRIAN, [1, 2, 2, 1, 2, 2, 2]),
      new ScalePattern(CONSTANTS.AEOLIAN, [2, 1, 2, 2, 1, 2, 2]),
      new ScalePattern(CONSTANTS.WHOLE_TONE, [2, 2, 2, 2, 2, 2]),
      new ScalePattern(CONSTANTS.PENTATONIC_MAJOR, [2, 2, 3, 2, 3]),
      new ScalePattern(CONSTANTS.PENTATONIC_MINOR, [3, 2, 2, 3, 2]),
      new ScalePattern(CONSTANTS.BLUES, [3, 2, 1, 1, 3, 2]),
      new ScalePattern(CONSTANTS.CHROMATIC, Array(12).fill(1)),
      new ScalePattern(CONSTANTS.HUNGARIAN_MINOR, [2, 1, 3, 1, 1, 3, 1]),
      new ScalePattern(CONSTANTS.PERSIAN, [1, 3, 1, 1, 2, 3, 1]),
      new ScalePattern(CONSTANTS.JAPANESE_IN_SEN, [1, 4, 2, 1, 4]),
      new ScalePattern(CONSTANTS.YO_SCALE, [2, 3, 2, 2, 3]),
      new ScalePattern(CONSTANTS.BALINESE, [1, 2, 3, 1, 1, 2, 2]),
      new ScalePattern(CONSTANTS.PELOG, [1, 2, 2, 1, 2, 2, 2]),
      new ScalePattern(CONSTANTS.PROMETHEUS, [2, 2, 2, 3, 1, 2]),
      new ScalePattern(CONSTANTS.OVERTONE, [2, 2, 2, 1, 2, 1, 2]),
      new ScalePattern(CONSTANTS.ARABIC, [2, 1, 3, 1, 1, 3, 1]),
      new ScalePattern(CONSTANTS.NEAPOLITAN_MAJOR, [1, 2, 2, 2, 2, 2, 1]),
      new ScalePattern(CONSTANTS.NEAPOLITAN_MINOR, [1, 2, 2, 2, 1, 3, 1]),
      new ScalePattern(CONSTANTS.GYPSY, [1, 3, 1, 2, 1, 3, 1]),
      new ScalePattern(CONSTANTS.SPANISH_GYPSY, [1, 3, 1, 2, 1, 2, 2]),
      new ScalePattern(CONSTANTS.HIRAJOSHI, [2, 1, 4, 1, 4]),
      new ScalePattern(CONSTANTS.IWATO, [1, 4, 1, 4, 2]),
      new ScalePattern(CONSTANTS.EGYPTIAN, [2, 3, 2, 3, 2]),
      new ScalePattern(CONSTANTS.CHINESE, [4, 2, 1, 4, 1]),
    ];
  }
}

export class Scale {
  constructor(root, pattern) {
    this.root = root;
    this.pattern = pattern;
  }

  notes() {
    let result = [this.root];
    let currentNote = this.root;
    for (let interval of this.pattern.intervals) {
      for (let i = 0; i < interval; i++) {
        currentNote = currentNote.next();
      }
      result.push(currentNote);
    }
    return result;
  }

  transposeForAltoSax() {
    const altoSaxTranspose = 9;
    return this.notes().map((note) => note.transpose(altoSaxTranspose));
  }

  transposeForTenorSax() {
    const tenorSaxTranspose = 2;
    return this.notes().map((note) => note.transpose(tenorSaxTranspose));
  }

  transposeForGuitar(semitones) {
    return this.notes().map((note) => note.transpose(semitones));
  }

  toFretsOnString(lowestStringNote) {
    const notes = this.notes().map((note) =>
      note.toFretOnString(lowestStringNote),
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
  }
}
