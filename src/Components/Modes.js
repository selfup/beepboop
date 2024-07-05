export function Modes({ customScale }) {
  const concertNotes = customScale.notes().map((note) => note.name);
  const altoSax = customScale
    .transposeForAltoSax()
    .map((note) => note.name);

  return (
    <>
      <div className="mode-slices">
        <p className="section-name">
          <b>C Major Derived Modes</b>
        </p>
        <div className="notes-section">
          <p className="notes">
            Concert Ionian:{' '}
            {concertNotes.map((concertNote, idx) => (
              <b key={idx} style={{ color: idx % 2 ? '' : 'coral' }}>
                {concertNote}{' '}
              </b>
            ))}
          </p>
          <p className="notes">
            Alto (Eb) Ionian:{' '}
            {altoSax.map((altoNote, idx) => (
              <b key={idx} style={{ color: idx % 2 ? '' : 'coral' }}>
                {altoNote}{' '}
              </b>
            ))}
          </p>
        </div>
        <div className="notes-section">
          <p className="notes">
            Concert Dorian:{' '}
            {concertNotes.map((concertNote, idx) => (
              <b key={idx} style={{ color: idx % 2 ? '' : 'coral' }}>
                {concertNote}{' '}
              </b>
            ))}
          </p>
          <p className="notes">
            Alto (Eb) Dorian:{' '}
            {altoSax.map((altoNote, idx) => (
              <b key={idx} style={{ color: idx % 2 ? '' : 'coral' }}>
                {altoNote}{' '}
              </b>
            ))}
          </p>
        </div>

        <div className="notes-section">
          <p className="notes">
            Concert Phrygian:{' '}
            {concertNotes.map((concertNote, idx) => (
              <b key={idx} style={{ color: idx % 2 ? '' : 'coral' }}>
                {concertNote}{' '}
              </b>
            ))}
          </p>
          <p className="notes">
            Alto (Eb) Phrygian:{' '}
            {altoSax.map((altoNote, idx) => (
              <b key={idx} style={{ color: idx % 2 ? '' : 'coral' }}>
                {altoNote}{' '}
              </b>
            ))}
          </p>
        </div>

        <div className="notes-section">
          <p className="notes">
            Concert Lydian:{' '}
            {concertNotes.map((concertNote, idx) => (
              <b key={idx} style={{ color: idx % 2 ? '' : 'coral' }}>
                {concertNote}{' '}
              </b>
            ))}
          </p>
          <p className="notes">
            Alto (Eb) Lydian:{' '}
            {altoSax.map((altoNote, idx) => (
              <b key={idx} style={{ color: idx % 2 ? '' : 'coral' }}>
                {altoNote}{' '}
              </b>
            ))}
          </p>
        </div>

        <div className="notes-section">
          <p className="notes">
            Concert Mixolydian:{' '}
            {concertNotes.map((concertNote, idx) => (
              <b key={idx} style={{ color: idx % 2 ? '' : 'coral' }}>
                {concertNote}{' '}
              </b>
            ))}
          </p>
          <p className="notes">
            Alto (Eb) Mixolydian:{' '}
            {altoSax.map((altoNote, idx) => (
              <b key={idx} style={{ color: idx % 2 ? '' : 'coral' }}>
                {altoNote}{' '}
              </b>
            ))}
          </p>
        </div>

        <div className="notes-section">
          <p className="notes">
            Concert Aeolian:{' '}
            {concertNotes.map((concertNote, idx) => (
              <b key={idx} style={{ color: idx % 2 ? '' : 'coral' }}>
                {concertNote}{' '}
              </b>
            ))}
          </p>
          <p className="notes">
            Alto (Eb) Aeolian:{' '}
            {altoSax.map((altoNote, idx) => (
              <b key={idx} style={{ color: idx % 2 ? '' : 'coral' }}>
                {altoNote}{' '}
              </b>
            ))}
          </p>
        </div>

        <div className="notes-section">
          <p className="notes">
            Concert Locrian:{' '}
            {concertNotes.map((concertNote, idx) => (
              <b key={idx} style={{ color: idx % 2 ? '' : 'coral' }}>
                {concertNote}{' '}
              </b>
            ))}
          </p>
          <p className="notes">
            Alto (Eb) Locrian:{' '}
            {altoSax.map((altoNote, idx) => (
              <b key={idx} style={{ color: idx % 2 ? '' : 'coral' }}>
                {altoNote}{' '}
              </b>
            ))}
          </p>
        </div>
      </div>
    </>
  );
}
