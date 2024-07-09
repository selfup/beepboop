export const E_STANDARD = 'E Standard';
export const DROP_D = 'Drop D';
export const DADGAD = 'DADGAD';
export const Eb_STANDARD = 'Eb Standard';
export const OPEN_G = 'Open G';
export const D_STANDARD = 'D Standard';
export const C_STANDARD = 'C Standard';
export const B_STANDARD = 'B Standard';

export const tunings = {
  [E_STANDARD]: () => [
    { position: 4 },
    { position: 9 },
    { position: 2 },
    { position: 7 },
    { position: 11 },
    { position: 4 },
  ],
  [DROP_D]: () => [
    { position: 2 },
    { position: 9 },
    { position: 2 },
    { position: 7 },
    { position: 11 },
    { position: 4 },
  ],
  [DADGAD]: () => [
    { position: 2 },
    { position: 9 },
    { position: 2 },
    { position: 7 },
    { position: 9 },
    { position: 2 },
  ],
  [Eb_STANDARD]: () => [
    { position: 3 },
    { position: 8 },
    { position: 1 },
    { position: 6 },
    { position: 10 },
    { position: 3 },
  ],
  [OPEN_G]: () => [
    { position: 2 },
    { position: 7 },
    { position: 2 },
    { position: 7 },
    { position: 11 },
    { position: 2 },
  ],
  [D_STANDARD]: () => [
    { position: 2 },
    { position: 7 },
    { position: 0 },
    { position: 5 },
    { position: 9 },
    { position: 2 },
  ],
  [C_STANDARD]: () => [
    { position: 0 },
    { position: 5 },
    { position: 10 },
    { position: 3 },
    { position: 7 },
    { position: 0 },
  ],
  [B_STANDARD]: () => [
    { position: 11 },
    { position: 4 },
    { position: 9 },
    { position: 2 },
    { position: 6 },
    { position: 11 },
  ],
};

export const tuningNames = () => {
  let names = [];

  for (const [key] of Object.entries(tunings)) {
    names.push(key);
  }

  return names;
};
