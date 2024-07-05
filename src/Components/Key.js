import { keyNames } from '../logic.js';

export function KeySection({
  appSetState,
  scaleKey,
  scaleKeyIndex,
  scaleNameIndex,
}) {
  return (
    <>
      <p>
        Key: <b>{scaleKey}</b>
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
    </>
  );
}
