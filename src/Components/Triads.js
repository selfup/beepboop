export function Triads({ scaleKey, scaleName, customScale }) {
  const concertNotes = customScale.notes().map((note) => note.name);
  const altoSax = customScale.transposeForAltoSax().map((note) => note.name);

  return (
    <>
      <div className="mode-slices">
        <p className="section-name">
          <b>
            {scaleKey} {scaleName} Triads
          </b>
        </p>
      </div>
    </>
  );
}
