import { keyNames } from '../lib/keys';

export function KeySection({
  appSetState,
  scaleKey,
  scaleNameIndex,
}) {
  return (
    <>
      <p className="section-name">
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
