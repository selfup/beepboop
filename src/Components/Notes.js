import {
  scaleNotes,
  transposeForAltoSax,
  transposeForTenorSax,
  toFretsOnString,
} from '../lib/scales';

export function NotesSection({ customScale }) {
  const concertNotes = scaleNotes(
    customScale.root,
    customScale.pattern,
  ).map((note) => note.name);

  const altoSax = transposeForAltoSax(
    customScale.root,
    customScale.pattern,
  ).map((note) => note.name);

  const tenorSax = transposeForTenorSax(
    customScale.root,
    customScale.pattern,
  ).map((note) => note.name);

  const lowEString = toFretsOnString(
    customScale.root,
    customScale.pattern,
    'E',
  );

  return (
    <div className="notes-section">
      <p className="notes">
        Concert Notes:{' '}
        {concertNotes.map((concertNote, idx) => (
          <b key={idx} style={{ color: idx % 2 ? '' : 'coral' }}>
            {concertNote}{' '}
          </b>
        ))}
      </p>

      <p className="notes">
        Alto Sax (Eb):{' '}
        {altoSax.map((altoNote, idx) => (
          <b key={idx} style={{ color: idx % 2 ? '' : 'coral' }}>
            {altoNote}{' '}
          </b>
        ))}
      </p>

      <p className="notes">
        Tenor Sax (Bb):{' '}
        {tenorSax.map((tenorNote, idx) => (
          <b key={idx} style={{ color: idx % 2 ? '' : 'coral' }}>
            {tenorNote}{' '}
          </b>
        ))}
      </p>

      <p className="notes">
        Low E String:{' '}
        <b>
          {' '}
          {lowEString.map((lowEStringNote, idx) => (
            <b key={idx} style={{ color: idx % 2 ? '' : 'coral' }}>
              {lowEStringNote}{' '}
            </b>
          ))}{' '}
        </b>
      </p>
    </div>
  );
}
