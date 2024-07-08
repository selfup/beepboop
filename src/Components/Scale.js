import { scaleNames } from '../lib/scales';

export function ScaleSection({
  appSetState,
  scaleName,
  scaleKeyIndex,
  customScaleIntervals,
}) {
  return (
    <>
      <p className="section-name">
        Scale: <b>{scaleName}</b> Intervals:{' '}
        {customScaleIntervals.map((interval, idx) => (
          <b key={idx} style={{ color: idx % 2 ? '' : '#90e4c8' }}>
            {interval}
          </b>
        ))}{' '}
        Notes: <b>{customScaleIntervals.length}</b>
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
