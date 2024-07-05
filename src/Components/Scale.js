import { scaleNames } from '../logic.js';

export function ScaleSection({
  appSetState,
  scaleName,
  scaleKeyIndex,
  scaleNameIndex,
}) {
  return (
    <>
      <p>
        Scale: <b>{scaleName}</b>
      </p>
      <div className="section">
        {scaleNames.map((name, idx) => (
          <button
            key={idx}
            onClick={() =>
              appSetState({ scaleKeyIndex, scaleNameIndex: idx })
            }
          >
            {name}
          </button>
        ))}
      </div>
    </>
  );
}
