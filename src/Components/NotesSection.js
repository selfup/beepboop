export function NotesSection({ customScale }) {
  const concertNotes = customScale
    .notes()
    .map((note) => note.name)
    .join(', ');

  const altoSax = customScale
    .transposeForAltoSax()
    .map((note) => note.name)
    .join(', ');

  const tenorSax = customScale
    .transposeForTenorSax()
    .map((note) => note.name)
    .join(', ');

  const lowEString = customScale.toFretsOnString('E').join(', ');
  return (
    <div className="notes-section">
      <p className="notes">
        Concert Notes: <b>{concertNotes}</b>
      </p>

      <p className="notes">
        Alto Sax (Eb): <b> {altoSax}</b>
      </p>

      <p className="notes">
        Tenor Sax (Bb): <b> {tenorSax}</b>
      </p>

      <p className="notes">
        Low E String: <b> {lowEString} </b>
      </p>
    </div>
  );
}
