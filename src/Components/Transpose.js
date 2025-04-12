import { useState } from 'react';
import { keyNames } from '../lib/keys';
import { allNotes } from '../lib/notes';

export function TransposeSection({ appSetState, scaleNameIndex }) {
  const initialState = {
    notes: [],
  };

  const [state, setState] = useState(initialState);

  return (
    <>
      <p className="section-name">
        <b>Transpose Tenor Notes</b>
      </p>
      <p className="inner-section-name">Select Notes</p>
      <p>
        <em>Each note clicked will add to a list of notes</em>
      </p>
      <div className="section">
        {keyNames.map((name, idx) => (
          <button
            className="key-button"
            key={idx}
            onClick={() => {
              const note = keyNames[idx];

              const notes = state.notes;

              notes.push({ name: note, idx });

              setState({ notes: notes });
            }}
          >
            {name}
          </button>
        ))}
      </div>
      <p className="inner-section-name">Transpose Tenor to Concert</p>
      <div className="section">
        <button
          onClick={() => {
            const newNotes = state.notes;

            newNotes.pop();

            setState({ notes: newNotes });
          }}
        >
          UNDO
        </button>
        <button
          onClick={() => {
            setState({ notes: [] });
          }}
        >
          CLEAR NOTES
        </button>
      </div>
      <div className="section">
        <div>
          Tenor Notes:{' '}
          {state.notes.map((note, i) => note.name).toString()}
        </div>
        <p>
          Concert Notes:{' '}
          {state.notes
            .map((note, i) => {
              const notes = allNotes();

              const newIndex =
                (note.idx - 2 + notes.length) % notes.length;

              return keyNames[newIndex];
            })
            .toString()}
        </p>
      </div>
    </>
  );
}
