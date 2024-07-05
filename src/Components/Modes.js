import {
  AEOLIAN,
  DORIAN,
  LOCRIAN,
  LYDIAN,
  MIXOLYDIAN,
  PHRYGIAN,
} from '../lib/constants';
import { scaleNotes, derivedMode } from '../lib/scales';

export function Modes({ scaleName, customScale }) {
  const concertNotes = scaleNotes(
    customScale.root,
    customScale.pattern,
  ).map((note) => note.name);

  const dorainNotes = derivedMode(concertNotes, DORIAN);
  const phrygianNotes = derivedMode(concertNotes, PHRYGIAN);
  const lydianNotes = derivedMode(concertNotes, LYDIAN);
  const mixolydianNotes = derivedMode(concertNotes, MIXOLYDIAN);
  const aeolianNotes = derivedMode(concertNotes, AEOLIAN);
  const locrianNotes = derivedMode(concertNotes, LOCRIAN);

  return (
    <>
      <div className="mode-slices">
        <p className="section-name">
          Derived <b>Modes</b>
        </p>
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
            {dorainNotes[0]} Dorian:{' '}
            {dorainNotes.map((concertNote, idx) => (
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
      </div>
    </>
  );
}
