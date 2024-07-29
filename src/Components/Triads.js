import { scaleNotes, transposeForAltoSax } from '../lib/scales';

export function Triads({ customScale, scaleKey, scaleName }) {
  const customNotes = scaleNotes(
    customScale.root,
    customScale.pattern,
  ).map((note) => note.name);

  const rootTriadNotes = rootTriad(customNotes);
  const firstInversionNotes = firstInversion(customNotes);
  const secondInversionNotes = secondInversion(customNotes);

  const altoSaxNotes = transposeForAltoSax(
    customScale.root,
    customScale.pattern,
  ).map((note) => note.name);

  const altoRootTriadNotes = rootTriad(altoSaxNotes);
  const altoFirstInversionNotes = firstInversion(altoSaxNotes);
  const altoSecondInversionNotes = secondInversion(altoSaxNotes);

  return (
    <>
      <p className="section-name">
        {scaleKey} {scaleName}
        <b> Triads</b>
      </p>
      <div className="notes-section">
        <p>
          <em>applies to 7 note scales</em>
        </p>
        <p className="notes">
          Root Triad (1-3-5): {mapTriads(rootTriadNotes)}
          Alto: {mapTriads(altoRootTriadNotes)}
        </p>
        <p className="notes">
          1st Inversion (3-5-8): {mapTriads(firstInversionNotes)}
          Alto: {mapTriads(altoFirstInversionNotes)}
        </p>
        <p className="notes">
          2nd Inversion (5-8-10): {mapTriads(secondInversionNotes)}
          Alto: {mapTriads(altoSecondInversionNotes)}
        </p>
      </div>
    </>
  );
}

function mapTriads(notes) {
  return notes.map((note, idx) => (
    <b key={idx} style={{ color: 'coral' }}>
      {note} {idx === notes.length - 1 ? '' : ' '}
    </b>
  ));
}

function rootTriad(notes) {
  return [notes[0], notes[2], notes[4]];
}

function firstInversion(notes) {
  return [notes[2], notes[4], notes[0]];
}

function secondInversion(notes) {
  return [notes[4], notes[0], notes[2]];
}
