import { keyNames } from './../../lib/keys';
import { toFretsOnString } from './../../lib/scales';

export const stringRow = ({
  string,
  stringIndex,
  strings,
  customScale,
  setState,
}) => {
  let currentStrings = [...strings];

  const keyName = keyNames[string.position];

  const scaleOnString = toFretsOnString(
    customScale.root,
    customScale.pattern,
    keyName,
  );

  return (
    <tr key={stringIndex} className="notes">
      <td>
        <button
          className="string-transpose"
          onClick={() => {
            let currentString = currentStrings[stringIndex];

            if (currentString.position === 0) {
              currentString.position = 11;
            } else {
              currentString.position -= 1;
            }

            setState({ strings: currentStrings });
          }}
        >
          <b>{'<'}</b>
        </button>
      </td>
      <td>
        <button
          className="string-transpose"
          onClick={() => {
            let currentString = currentStrings[stringIndex];

            if (currentString.position === 11) {
              currentString.position = 0;
            } else {
              currentString.position += 1;
            }

            setState({ strings: currentStrings });
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

export function tuningMod({ mod, currentStrings }) {
  if (mod === 'Hypno') {
    if (currentStrings[4].position === 0) {
      currentStrings[4].position = 11;
    } else if (currentStrings[4].position === 0) {
      currentStrings[4].position = 10;
    } else {
      currentStrings[4].position -= 2;
    }

    if (currentStrings[5].position === 1) {
      currentStrings[5].position = 11;
    } else if (currentStrings[5].position === 0) {
      currentStrings[5].position = 10;
    } else {
      currentStrings[5].position -= 2;
    }
  } else if (mod === '4th Up') {
    if (currentStrings[3].position === 0) {
      currentStrings[3].position = 11;
    } else {
      currentStrings[3].position -= 1;
    }
  } else if (mod === '4th Up Drop 5') {
    if (currentStrings[3].position === 0) {
      currentStrings[3].position = 11;
    } else {
      currentStrings[3].position -= 1;
    }

    if (currentStrings[0].position === 4) {
      currentStrings[0].position = 11;
    } else if (currentStrings[0].position === 3) {
      currentStrings[0].position = 10;
    } else if (currentStrings[0].position === 2) {
      currentStrings[0].position = 9;
    } else if (currentStrings[0].position === 1) {
      currentStrings[0].position = 8;
    } else if (currentStrings[0].position === 0) {
      currentStrings[0].position = 7;
    } else {
      currentStrings[0].position -= 1;
    }
  } else {
    return;
  }
}

export function mapNotes(notes) {
  return notes.map((note, idx) => (
    <b key={idx} style={{ color: idx % 2 ? '' : 'coral' }}>
      {note}
    </b>
  ));
}

export function mapTableNotes(notes) {
  return notes.map((note, idx) => (
    <td key={idx} style={{ color: idx % 2 ? '' : 'coral' }}>
      <b>{note}</b>
    </td>
  ));
}
