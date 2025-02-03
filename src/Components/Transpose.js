import { useState } from 'react';
import { keyNames } from '../lib/keys';
import { collectNotes } from '../lib/scales';
import { allNotes } from '../lib/notes';

export function TransposeSection({ appSetState, scaleNameIndex }) {
  const initialState = {
    notes: [],
  };

  const [state, setState] = useState(initialState);

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
      <p className="inner-section-name">Select how to transpose</p>
      <div className="section">
        <button onClick={() => {}}>Tenor to Concert</button>
        <button onClick={() => {}}>Alto to Concert</button>
        <button onClick={() => {}}>Concert to Tenor</button>
        <button onClick={() => {}}>Concert to Alto</button>
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
          Given Notes:{' '}
          {state.notes.map((note, i) => note.name).toString()}
        </div>
        <p>
          Transposed Notes:{' '}
          {state.notes
            .map((note, i) => {
              const notes = allNotes();

              const newIndex =
                (note.idx + 2 + notes.length) % notes.length;

              return keyNames[newIndex];
            })
            .toString()}
        </p>
      </div>
    </>
  );
}
