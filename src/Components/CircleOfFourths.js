import React from 'react';

import {
  A,
  A_SHARP,
  B,
  C,
  C_SHARP,
  D_SHARP,
  E,
  F,
  F_SHARP,
  G_SHARP,
  G,
  D,
} from '../lib/constants';

import { transpose } from '../lib/scales';

export function CircleOfFourths() {
  const circleOfFourthsMajorRoots = [
    C,
    F,
    A_SHARP,
    D_SHARP,
    G_SHARP,
    C_SHARP,
    F_SHARP,
    B,
    E,
    A,
    D,
    G,
  ];

  const circleOfFourthsRelativeMinors = [
    A,
    D,
    G,
    C,
    F,
    A_SHARP,
    D_SHARP,
    G_SHARP,
    C_SHARP,
    F_SHARP,
    B,
    C,
  ];

  return (
    <div>
      <p className="section-name">
        <b> Circle of Fourths</b>
      </p>
      <div className="notes-section">
        <table style={{ width: '100%', display: 'inline' }}>
          <tbody>
            {circleOfFourthsMajorRoots.map((note, idx) => {
              const minorNote =
                circleOfFourthsRelativeMinors[
                  idx
                ].toLocaleLowerCase();

              const alto = transpose(note, 9).name;
              const altoMinor = transpose(
                minorNote,
                9,
              ).name.toLocaleLowerCase();

              const tenor = transpose(note, 2).name;
              const tenorMinor = transpose(
                minorNote,
                2,
              ).name.toLocaleLowerCase();

              return (
                <React.Fragment key={idx}>
                  <tr className="notes">
                    <td>
                      <i>Maj</i>
                    </td>
                    <td> Concert:</td>
                    <td>
                      <b style={{ color: 'coral' }}>
                        {note}
                        {'  '}
                      </b>
                    </td>
                    <td>Alto:</td>
                    <td>
                      <b style={{ color: 'cornsilk' }}>
                        {alto}
                        {'  '}
                      </b>
                    </td>
                    <td>Tenor:</td>
                    <td>
                      <b style={{ color: 'cadetblue' }}>
                        {tenor}
                        {'  '}
                      </b>
                    </td>
                  </tr>
                  <tr className="notes">
                    <td>
                      <i>min</i>
                    </td>
                    <td> concert:</td>
                    <td>
                      <b style={{ color: 'coral' }}>
                        {minorNote}
                        {'  '}
                      </b>
                    </td>
                    <td>alto:</td>
                    <td>
                      <b style={{ color: 'cornsilk' }}>
                        {altoMinor}
                        {'  '}
                      </b>
                    </td>
                    <td>tenor:</td>
                    <td>
                      <b style={{ color: 'cadetblue' }}>
                        {tenorMinor}
                        {'  '}
                      </b>
                    </td>
                  </tr>
                  <tr>
                    <td> </td>
                    <td> </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td> </td>
                    <td> </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
