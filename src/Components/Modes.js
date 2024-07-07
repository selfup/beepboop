import {
  AEOLIAN,
  DORIAN,
  DORIAN_FLAT_2,
  DORIAN_SHARP_4,
  HARMONIC_MINOR,
  IONIAN,
  IONIAN_SHARP_5,
  LOCRIAN,
  LOCRIAN_SHARP_6,
  SUPERLOCRIAN,
  ULTRALOCRIAN,
  LYDIAN,
  LYDIAN_AUGMENTED,
  LYDIAN_DOMINANT,
  LYDIAN_SHARP_2,
  MAJOR,
  MELODIC_MINOR,
  MIXOLYDIAN,
  MIXOLYDIAN_FLAT_6,
  PHRYGIAN,
  PHRYGIAN_DOMINANT,
} from '../lib/constants';

import { scaleNotes, derivedMode, modeScales } from '../lib/scales';

export function Modes({ scaleName, customScale }) {
  const firstModeNotes = scaleNotes(
    customScale.root,
    customScale.pattern,
  ).map((note) => note.name);

  if (modeScales.includes(scaleName)) {
    return (
      <>
        <div className="mode-slices">
          <p className="section-name">
            Derived <b>Modes</b>
          </p>
          {derivedSection(firstModeNotes, scaleName)}
        </div>
      </>
    );
  } else {
    return (
      <>
        <p className="section-name">
          Derived <b>Modes</b>
        </p>
        <div className="notes-section">
          <p>This scale doesn't have</p>
          <p>derived or relative modes</p>
          <p>according to classical music theory</p>
        </div>
      </>
    );
  }
}

function derivedSection(firstModeNotes, scaleName) {
  const secondModeNotes = derivedMode(firstModeNotes, DORIAN);
  const thirdModeNotes = derivedMode(firstModeNotes, PHRYGIAN);
  const fourthModeNotes = derivedMode(firstModeNotes, LYDIAN);
  const fifthModeNotes = derivedMode(firstModeNotes, MIXOLYDIAN);
  const sixthModeNotes = derivedMode(firstModeNotes, AEOLIAN);
  const seventhModeNotes = derivedMode(firstModeNotes, LOCRIAN);

  if (scaleName === MAJOR) {
    return (
      <div className="notes-section">
        {derivedShift(firstModeNotes, IONIAN)}
        {derivedShift(secondModeNotes, DORIAN)}
        {derivedShift(thirdModeNotes, PHRYGIAN)}
        {derivedShift(fourthModeNotes, LYDIAN)}
        {derivedShift(fifthModeNotes, MIXOLYDIAN)}
        {derivedShift(sixthModeNotes, AEOLIAN)}
        {derivedShift(seventhModeNotes, LOCRIAN)}
      </div>
    );
  }

  if (scaleName === HARMONIC_MINOR) {
    return (
      <div className="notes-section">
        {derivedShift(firstModeNotes, HARMONIC_MINOR, true)}
        {derivedShift(secondModeNotes, LOCRIAN_SHARP_6)}
        {derivedShift(thirdModeNotes, IONIAN_SHARP_5)}
        {derivedShift(fourthModeNotes, DORIAN_SHARP_4, true)}
        {derivedShift(fifthModeNotes, PHRYGIAN_DOMINANT, true)}
        {derivedShift(sixthModeNotes, LYDIAN_SHARP_2)}
        {derivedShift(seventhModeNotes, ULTRALOCRIAN)}
      </div>
    );
  }

  if (scaleName === MELODIC_MINOR) {
    return (
      <div className="notes-section">
        {derivedShift(firstModeNotes, HARMONIC_MINOR, true)}
        {derivedShift(secondModeNotes, DORIAN_FLAT_2)}
        {derivedShift(thirdModeNotes, LYDIAN_AUGMENTED)}
        {derivedShift(fourthModeNotes, LYDIAN_DOMINANT, true)}
        {derivedShift(fifthModeNotes, PHRYGIAN_DOMINANT, true)}
        {derivedShift(sixthModeNotes, MIXOLYDIAN_FLAT_6)}
        {derivedShift(seventhModeNotes, SUPERLOCRIAN)}
      </div>
    );
  }
}

function derivedShift(notes, mode, useful = false) {
  return (
    <p className="notes">
      {useful ? <b>* </b> : ''}
      {notes[0]} {mode}:{' '}
      {notes.map((note, idx) => (
        <b key={idx} style={{ color: idx % 2 ? '' : 'coral' }}>
          {note}{' '}
        </b>
      ))}
    </p>
  );
}
