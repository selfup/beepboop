import {
  AEOLIAN,
  DORIAN,
  HARMONIC_MINOR,
  LOCRIAN,
  LYDIAN,
  MAJOR,
  MELODIC_MINOR,
  MIXOLYDIAN,
  PHRYGIAN,
} from '../lib/constants';

import { scaleNotes, derivedMode, modeScales } from '../lib/scales';

export function Modes({ scaleName, customScale }) {
  const concertNotes = scaleNotes(
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
          {derivedSection(concertNotes, scaleName)}
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

function derivedSection(concertNotes, scaleName) {
  const firstModeNotes = derivedMode(concertNotes, DORIAN);
  const phrygianNotes = derivedMode(concertNotes, PHRYGIAN);
  const lydianNotes = derivedMode(concertNotes, LYDIAN);
  const mixolydianNotes = derivedMode(concertNotes, MIXOLYDIAN);
  const aeolianNotes = derivedMode(concertNotes, AEOLIAN);
  const locrianNotes = derivedMode(concertNotes, LOCRIAN);

  if (scaleName === MAJOR) {
    return (
      <div className="notes-section">
        <p className="notes">
          {concertNotes[0]} {scaleName} Ionian:{' '}
          {concertNotes.map((concertNote, idx) => (
            <b key={idx} style={{ color: idx % 2 ? '' : 'coral' }}>
              {concertNote}{' '}
            </b>
          ))}
        </p>
        <p className="notes">
          {firstModeNotes[0]} Dorian:{' '}
          {firstModeNotes.map((concertNote, idx) => (
            <b key={idx} style={{ color: idx % 2 ? '' : 'coral' }}>
              {concertNote}{' '}
            </b>
          ))}
        </p>
        <p className="notes">
          {phrygianNotes[0]} Phrygian:{' '}
          {phrygianNotes.map((concertNote, idx) => (
            <b key={idx} style={{ color: idx % 2 ? '' : 'coral' }}>
              {concertNote}{' '}
            </b>
          ))}
        </p>

        <p className="notes">
          {lydianNotes[0]} Lydian:{' '}
          {lydianNotes.map((concertNote, idx) => (
            <b key={idx} style={{ color: idx % 2 ? '' : 'coral' }}>
              {concertNote}{' '}
            </b>
          ))}
        </p>

        <p className="notes">
          {mixolydianNotes[0]} Mixolydian:{' '}
          {mixolydianNotes.map((concertNote, idx) => (
            <b key={idx} style={{ color: idx % 2 ? '' : 'coral' }}>
              {concertNote}{' '}
            </b>
          ))}
        </p>

        <p className="notes">
          {aeolianNotes[0]} Aeolian:{' '}
          {aeolianNotes.map((concertNote, idx) => (
            <b key={idx} style={{ color: idx % 2 ? '' : 'coral' }}>
              {concertNote}{' '}
            </b>
          ))}
        </p>

        <p className="notes">
          {locrianNotes[0]} Locrian:{' '}
          {locrianNotes.map((concertNote, idx) => (
            <b key={idx} style={{ color: idx % 2 ? '' : 'coral' }}>
              {concertNote}{' '}
            </b>
          ))}
        </p>
      </div>
    );
  }

  if (scaleName === HARMONIC_MINOR) {
    return (
      <div className="notes-section">
        <p className="notes">
          {concertNotes[0]} Harmonic Minor:{' '}
          {concertNotes.map((concertNote, idx) => (
            <b key={idx} style={{ color: idx % 2 ? '' : 'coral' }}>
              {concertNote}{' '}
            </b>
          ))}
        </p>
        <p className="notes">
          {firstModeNotes[0]} Locrian #6:{' '}
          {firstModeNotes.map((concertNote, idx) => (
            <b key={idx} style={{ color: idx % 2 ? '' : 'coral' }}>
              {concertNote}{' '}
            </b>
          ))}
        </p>
        <p className="notes">
          {phrygianNotes[0]} Ionian #5:{' '}
          {phrygianNotes.map((concertNote, idx) => (
            <b key={idx} style={{ color: idx % 2 ? '' : 'coral' }}>
              {concertNote}{' '}
            </b>
          ))}
        </p>

        <p className="notes">
          {lydianNotes[0]} Dorian #4:{' '}
          {lydianNotes.map((concertNote, idx) => (
            <b key={idx} style={{ color: idx % 2 ? '' : 'coral' }}>
              {concertNote}{' '}
            </b>
          ))}
        </p>

        <p className="notes">
          {mixolydianNotes[0]} Phrygian Dominant:{' '}
          {mixolydianNotes.map((concertNote, idx) => (
            <b key={idx} style={{ color: idx % 2 ? '' : 'coral' }}>
              {concertNote}{' '}
            </b>
          ))}
        </p>

        <p className="notes">
          {aeolianNotes[0]} Lydian #2:{' '}
          {aeolianNotes.map((concertNote, idx) => (
            <b key={idx} style={{ color: idx % 2 ? '' : 'coral' }}>
              {concertNote}{' '}
            </b>
          ))}
        </p>

        <p className="notes">
          {locrianNotes[0]} Ultralocrian:{' '}
          {locrianNotes.map((concertNote, idx) => (
            <b key={idx} style={{ color: idx % 2 ? '' : 'coral' }}>
              {concertNote}{' '}
            </b>
          ))}
        </p>
      </div>
    );
  }

  if (scaleName === MELODIC_MINOR) {
    return (
      <div className="notes-section">
        <p className="notes">
          {concertNotes[0]} Melodic Minor:{' '}
          {concertNotes.map((concertNote, idx) => (
            <b key={idx} style={{ color: idx % 2 ? '' : 'coral' }}>
              {concertNote}{' '}
            </b>
          ))}
        </p>
        <p className="notes">
          {firstModeNotes[0]} Dorian b2:{' '}
          {firstModeNotes.map((concertNote, idx) => (
            <b key={idx} style={{ color: idx % 2 ? '' : 'coral' }}>
              {concertNote}{' '}
            </b>
          ))}
        </p>
        <p className="notes">
          {phrygianNotes[0]} Lydian Augmented:{' '}
          {phrygianNotes.map((concertNote, idx) => (
            <b key={idx} style={{ color: idx % 2 ? '' : 'coral' }}>
              {concertNote}{' '}
            </b>
          ))}
        </p>

        <p className="notes">
          {lydianNotes[0]} Lydian Dominant:{' '}
          {lydianNotes.map((concertNote, idx) => (
            <b key={idx} style={{ color: idx % 2 ? '' : 'coral' }}>
              {concertNote}{' '}
            </b>
          ))}
        </p>

        <p className="notes">
          {mixolydianNotes[0]} Mixolydian b6:{' '}
          {mixolydianNotes.map((concertNote, idx) => (
            <b key={idx} style={{ color: idx % 2 ? '' : 'coral' }}>
              {concertNote}{' '}
            </b>
          ))}
        </p>

        <p className="notes">
          {aeolianNotes[0]} Locrian #2:{' '}
          {aeolianNotes.map((concertNote, idx) => (
            <b key={idx} style={{ color: idx % 2 ? '' : 'coral' }}>
              {concertNote}{' '}
            </b>
          ))}
        </p>

        <p className="notes">
          {locrianNotes[0]} Superlocrian:{' '}
          {locrianNotes.map((concertNote, idx) => (
            <b key={idx} style={{ color: idx % 2 ? '' : 'coral' }}>
              {concertNote}{' '}
            </b>
          ))}
        </p>
      </div>
    );
  }
}
