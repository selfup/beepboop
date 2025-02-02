import { keyNames } from '../lib/keys';

export function TransposeSection({ appSetState, scaleNameIndex }) {
  return (
    <>
      <p className="section-name">
        <b>Transpose Notes</b>
      </p>
      <p className="inner-section-name">Select Notes</p>
      <p>
        <em>
          Each note clicked will add to a list of notes to transpose
        </em>
      </p>
      <div className="section">
        {keyNames.map((name, idx) => (
          <button
            className="key-button"
            key={idx}
            onClick={() =>
              appSetState({ scaleKeyIndex: idx, scaleNameIndex })
            }
          >
            {name}
          </button>
        ))}
      </div>
      <p className="inner-section-name">Select how to transpose</p>
      <div className="section">
        <button onClick={() => {}}>Tenor to Concert</button>
        <button onClick={() => {}}>Alto to Concert</button>
        <button onClick={() => {}}>Concert to Tenor</button>
        <button onClick={() => {}}>Concert to Alto</button>
      </div>
    </>
  );
}
