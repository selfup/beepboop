import { useState } from 'react';

import {
  scaleNotes,
  transposeForAltoSax,
  transposeForTenorSax,
} from '../lib/scales';

import { stringRow, mapTableNotes, tuningMod } from './Helpers';

const eStandard = () => [
  { position: 4 },
  { position: 9 },
  { position: 2 },
  { position: 7 },
  { position: 11 },
  { position: 4 },
];

const dropD = () => [
  { position: 2 },
  { position: 7 },
  { position: 2 },
  { position: 7 },
  { position: 11 },
  { position: 2 },
];

const openG = () => [
  { position: 2 },
  { position: 7 },
  { position: 2 },
  { position: 7 },
  { position: 11 },
  { position: 2 },
];

const dStandard = () => [
  { position: 2 },
  { position: 7 },
  { position: 0 },
  { position: 5 },
  { position: 9 },
  { position: 2 },
];

const cStandard = () => [
  { position: 0 },
  { position: 5 },
  { position: 10 },
  { position: 3 },
  { position: 7 },
  { position: 0 },
];

const bStandard = () => [
  { position: 11 },
  { position: 4 },
  { position: 9 },
  { position: 2 },
  { position: 6 },
  { position: 11 },
];

export function NotesSection({ customScale }) {
  const [state, setState] = useState({
    moded: false,
    strings: eStandard(),
  });

  const { moded, strings } = state;

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
      <p className="section-name">Winds</p>
      <table style={{ width: '100%', display: 'inline' }}>
        <tbody>
          <tr className="notes">
            <td>Concert Notes:</td>
            {mapTableNotes(concertNotes)}
          </tr>
          <tr className="notes">
            <td className="notes">Alto Sax (Eb):</td>
            {mapTableNotes(altoSax)}
          </tr>
          <tr className="notes">
            <td className="notes">Tenor Sax (Bb):</td>
            {mapTableNotes(tenorSax)}
          </tr>
        </tbody>
      </table>
      <div>
        <p></p>
      </div>
      <p className="section-name">Guitar</p>
      <table style={{ width: '100%', display: 'inline' }}>
        <tbody>
          {strings.map((string, stringIndex) =>
            stringRow({
              string,
              stringIndex,
              strings,
              customScale,
              setState,
            }),
          )}
        </tbody>
      </table>
      <div>
        <p></p>
      </div>
      <div className="notes">Alternate Tunings</div>
      <div>
        <button onClick={() => setState({ strings: eStandard() })}>
          E Standard
        </button>
        <button onClick={() => setState({ strings: dropD() })}>
          Drop D
        </button>
        <button onClick={() => setState({ strings: openG() })}>
          Open G
        </button>
      </div>
      <div>
        <button onClick={() => setState({ strings: dStandard() })}>
          D Standard
        </button>
        <button onClick={() => setState({ strings: cStandard() })}>
          C Standard
        </button>
        <button onClick={() => setState({ strings: bStandard() })}>
          B Standard
        </button>
      </div>
      <div className="notes">Regis Mods</div>
      <div>
        <button
          disabled={moded}
          style={{ backgroundColor: moded ? 'grey' : '' }}
          onClick={() => {
            const mod = 'Hypno';
            let currentStrings = [...strings];

            tuningMod({ mod, currentStrings });
            setState({ strings: currentStrings, moded: true });
          }}
        >
          Hypno
        </button>
        <button
          disabled={moded}
          style={{ backgroundColor: moded ? 'grey' : '' }}
          onClick={() => {
            const mod = '4th Up';
            let currentStrings = [...strings];

            tuningMod({ mod, currentStrings });
            setState({ strings: currentStrings, moded: true });
          }}
        >
          4th Up
        </button>
        <button
          disabled={moded}
          style={{ backgroundColor: moded ? 'grey' : '' }}
          onClick={() => {
            const mod = '4th Up Drop 5';
            let currentStrings = [...strings];

            tuningMod({ mod, currentStrings });
            setState({ strings: currentStrings, moded: true });
          }}
        >
          4th Up Down 5
        </button>
      </div>
    </div>
  );
}
