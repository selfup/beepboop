import { useState } from 'react';

import {
  scaleNotes,
  transposeForAltoSax,
  transposeForTenorSax,
} from '../lib/scales';

import { E_STANDARD, tunings, tuningNames } from '../lib/tunings';

import { stringRow, mapTableNotes, tuningMod } from './Helpers';

export function NotesSection({ customScale }) {
  const [state, setState] = useState({
    moded: false,
    tuning: E_STANDARD,
    strings: tunings[E_STANDARD](),
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
      <p className="inner-section-name">Winds</p>
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
      <p className="inner-section-name">Guitar</p>
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
      <p className="inner-section-name">Alternate Tunings</p>
      <div>
        {tuningNames().map((name, idx) => {
          return (
            <button
              key={idx}
              onClick={() =>
                setState({ tuning: name, strings: tunings[name]() })
              }
            >
              {name}
            </button>
          );
        })}
      </div>
      <p className="inner-section-name">Common Regis Mods</p>
      <div>
        {moded ? (
          <button
            onClick={() => {
              const { tuning } = state;

              const strings = tunings[tuning]();

              setState({ tuning, strings });
            }}
          >
            Undo
          </button>
        ) : (
          ''
        )}
        <button
          disabled={moded}
          style={{ backgroundColor: moded ? 'grey' : '' }}
          onClick={() => {
            const mod = 'Hypno';
            const { tuning } = state;
            let currentStrings = [...strings];

            tuningMod({ mod, currentStrings });
            setState({
              moded: true,
              tuning,
              strings: currentStrings,
            });
          }}
        >
          Hypno
        </button>
        <button
          disabled={moded}
          style={{ backgroundColor: moded ? 'grey' : '' }}
          onClick={() => {
            const mod = '4th Up';
            const { tuning } = state;
            let currentStrings = [...strings];

            tuningMod({ mod, currentStrings });
            setState({
              moded: true,
              tuning,
              strings: currentStrings,
            });
          }}
        >
          4th Up
        </button>
        <button
          disabled={moded}
          style={{ backgroundColor: moded ? 'grey' : '' }}
          onClick={() => {
            const mod = '4th Up Drop 5';
            const { tuning } = state;
            let currentStrings = [...strings];

            tuningMod({ mod, currentStrings });
            setState({
              moded: true,
              tuning,
              strings: currentStrings,
            });
          }}
        >
          4th Up Down 5
        </button>
      </div>
    </div>
  );
}
