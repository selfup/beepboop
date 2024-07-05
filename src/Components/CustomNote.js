import { useState } from 'react';
import { keyNames } from '../lib/keys';
import { toFretsOnString } from '../lib/scales';

export function CustomNoteSection({ customScale }) {
  const [state, setState] = useState({
    customStringIndex: 0,
  });

  const { customStringIndex } = state;

  const customStringNote = keyNames[customStringIndex];

  const customStringNotes = toFretsOnString(
    customScale.root,
    customScale.pattern,
    customStringNote,
  );

  return (
    <>
      <p className="section-name">
        Custom String Note: <b>{customStringNote}</b>
      </p>
      <div className="section">
        {keyNames.map((name, idx) => (
          <button
            className="key-button"
            key={idx}
            onClick={() => setState({ customStringIndex: idx })}
          >
            {name}
          </button>
        ))}
      </div>
      <div className="notes-section">
        <p className="notes">
          Custom String <b>{customStringNote}</b>:{' '}
          {customStringNotes.map((customNote, idx) => (
            <b key={idx} style={{ color: idx % 2 ? '' : 'coral' }}>
              {customNote}{' '}
            </b>
          ))}
        </p>
      </div>
    </>
  );
}
