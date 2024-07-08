import {
  scaleNotes,
  transposeForAltoSax,
  transposeForTenorSax,
  toFretsOnString,
} from '../lib/scales';

import { keyNames } from '../lib/keys';

import { useState } from 'react';

export function NotesSection({ customScale }) {
  const [state, setState] = useState({
    strings: [
      { idx: 4 },
      { idx: 9 },
      { idx: 2 },
      { idx: 7 },
      { idx: 11 },
      { idx: 4 },
    ],
  });

  const { strings } = state;

  const concertNotes = scaleNotes(
    customScale.root,
    customScale.pattern,
  ).map((note) => note.name);

  const altoSax = transposeForAltoSax(
    customScale.root,
    customScale.pattern,
  ).map((note) => note.name);

  const tenorSax = transposeForTenorSax(
    customScale.root,
    customScale.pattern,
  ).map((note) => note.name);

  return (
    <div className="notes-section">
      <p className="notes">Concert Notes: {mapNotes(concertNotes)}</p>
      <p className="notes">Alto Sax (Eb): {mapNotes(altoSax)}</p>
      <p className="notes">Tenor Sax (Bb): {mapNotes(tenorSax)}</p>
      <table style={{ width: '100%', display: 'inline' }}>
        <tbody>
          {strings.map((string, i) =>
            stringRow({ i, string, strings, customScale, setState }),
          )}
        </tbody>
      </table>
    </div>
  );
}

const stringRow = ({ i, string, strings, customScale, setState }) => {
  let newStrings = [...strings];

  const keyName = keyNames[string.idx];

  const scaleOnString = toFretsOnString(
    customScale.root,
    customScale.pattern,
    keyName,
  );

  return (
    <tr key={i} className="notes">
      {/* <td> */}
      <td>
        <button
          className="string-transpose"
          onClick={() => {
            let newString = newStrings[i];

            if (newString.idx === 0) {
              newString.idx = 11;
            } else {
              newString.idx -= 1;
            }

            setState({ strings: newStrings });
          }}
        >
          <b>{'<'}</b>
        </button>
      </td>
      <td>
        <button
          className="string-transpose"
          onClick={() => {
            let newString = newStrings[i];

            if (newString.idx === 11) {
              newString.idx = 0;
            } else {
              newString.idx += 1;
            }

            setState({ strings: newStrings });
          }}
        >
          <b>{'>'}</b>
        </button>{' '}
        {keyName} String:
      </td>
      {mapTableNotes(scaleOnString)}
    </tr>
  );
};

function mapNotes(notes) {
  return notes.map((note, idx) => (
    <b key={idx} style={{ color: idx % 2 ? '' : 'coral' }}>
      {note}{' '}
    </b>
  ));
}

function mapTableNotes(notes) {
  return notes.map((note, idx) => (
    <td style={{ color: idx % 2 ? '' : 'coral' }} key={idx}>
      <b>{note}</b>
    </td>
  ));
}
