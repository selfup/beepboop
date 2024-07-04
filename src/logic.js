export class Note {
  constructor(name) {
    this.name = name;
  }

  static all() {
    return [
      new Note('C'),
      new Note('C#'),
      new Note('D'),
      new Note('D#'),
      new Note('E'),
      new Note('F'),
      new Note('F#'),
      new Note('G'),
      new Note('G#'),
      new Note('A'),
      new Note('A#'),
      new Note('B'),
    ];
  }

  next() {
    const allNotes = Note.all();
    const currentIndex = allNotes.findIndex((note) => note.name === this.name);
    return allNotes[(currentIndex + 1) % allNotes.length];
  }

  transpose(semitones) {
    const allNotes = Note.all();
    const currentIndex = allNotes.findIndex((note) => note.name === this.name);
    const newIndex =
      (currentIndex + semitones + allNotes.length) % allNotes.length;
    return allNotes[newIndex];
  }

  toFretOnString(lowestStringNote) {
    const allNotes = Note.all();
    const eIndex = allNotes.findIndex((note) => note.name === lowestStringNote);
    const noteIndex = allNotes.findIndex((note) => note.name === this.name);
    return (noteIndex - eIndex + 12) % 12;
  }
}

export class ScalePattern {
  constructor(name, intervals) {
    this.name = name;
    this.intervals = intervals;
  }

  static allPatterns() {
    return [
      new ScalePattern('Major', [2, 2, 1, 2, 2, 2, 1]),
      new ScalePattern('Minor', [2, 1, 2, 2, 1, 2, 2]),
      new ScalePattern('Melodic Minor', [2, 1, 2, 2, 2, 2, 1]),
      new ScalePattern('Harmonic Minor', [2, 1, 2, 2, 1, 3, 1]),
      new ScalePattern('Dorian', [2, 1, 2, 2, 2, 1, 2]),
      new ScalePattern('Phrygian', [1, 2, 2, 2, 1, 2, 2]),
      new ScalePattern('Lydian', [2, 2, 2, 1, 2, 2, 1]),
      new ScalePattern('Mixolydian', [2, 2, 1, 2, 2, 1, 2]),
      new ScalePattern('Locrian', [1, 2, 2, 1, 2, 2, 2]),
      new ScalePattern('Whole Tone', [2, 2, 2, 2, 2, 2]),
      new ScalePattern('Pentatonic Major', [2, 2, 3, 2, 3]),
      new ScalePattern('Pentatonic Minor', [3, 2, 2, 3, 2]),
      new ScalePattern('Blues', [3, 2, 1, 1, 3, 2]),
      new ScalePattern('Chromatic', Array(12).fill(1)),
      new ScalePattern('Hungarian Minor', [2, 1, 3, 1, 1, 3, 1]),
      new ScalePattern('Persian', [1, 3, 1, 1, 2, 3, 1]),
      new ScalePattern('Japanese (In Sen)', [1, 4, 2, 1, 4]),
      new ScalePattern('Yo Scale', [2, 3, 2, 2, 3]),
      new ScalePattern('Balinese', [1, 2, 3, 1, 1, 2, 2]),
      new ScalePattern('Pelog', [1, 2, 2, 1, 2, 2, 2]),
      new ScalePattern('Prometheus', [2, 2, 2, 3, 1, 2]),
      new ScalePattern('Overtone', [2, 2, 2, 1, 2, 1, 2]),
      new ScalePattern('Arabic', [2, 1, 3, 1, 1, 3, 1]),
      new ScalePattern('Neapolitan Major', [1, 2, 2, 2, 2, 2, 1]),
      new ScalePattern('Neapolitan Minor', [1, 2, 2, 2, 1, 3, 1]),
      new ScalePattern('Gypsy', [1, 3, 1, 2, 1, 3, 1]),
      new ScalePattern('Spanish Gypsy', [1, 3, 1, 2, 1, 2, 2]),
      new ScalePattern('Hirajoshi', [2, 1, 4, 1, 4]),
      new ScalePattern('Iwato', [1, 4, 1, 4, 2]),
      new ScalePattern('Egyptian', [2, 3, 2, 3, 2]),
      new ScalePattern('Chinese', [4, 2, 1, 4, 1]),
    ];
  }
}

export class Scale {
  constructor(root, pattern) {
    this.root = root;
    this.pattern = pattern;
  }

  notes() {
    let result = [this.root];
    let currentNote = this.root;
    for (let interval of this.pattern.intervals) {
      for (let i = 0; i < interval; i++) {
        currentNote = currentNote.next();
      }
      result.push(currentNote);
    }
    return result;
  }

  transposeForAltoSax() {
    const altoSaxTranspose = 9;
    return this.notes().map((note) => note.transpose(altoSaxTranspose));
  }

  transposeForTenorSax() {
    const tenorSaxTranspose = 2;
    return this.notes().map((note) => note.transpose(tenorSaxTranspose));
  }

  transposeForGuitar(semitones) {
    return this.notes().map((note) => note.transpose(semitones));
  }

  toFretsOnString(lowestStringNote) {
    return this.notes().map((note) => note.toFretOnString(lowestStringNote));
  }
}

export const keyNames = [
  'C',
  'C#',
  'D',
  'D#',
  'E',
  'F',
  'F#',
  'G',
  'G#',
  'A',
  'A#',
  'B',
];

export const scaleNames = [
  'Major',
  'Minor',
  'Harmonic Minor',
  'Melodic Minor',
  'Dorian',
  'Phrygian',
  'Lydian',
  'Mixolydian',
  'Locrian',
  'Whole Tone',
  'Pentatonic Major',
  'Pentatonic Minor',
  'Blues',
  'Chromatic',
  'Hungarian Minor',
  'Persian',
  'Japanese (In Sen)',
  'Yo Scale',
  'Balinese',
  'Pelog',
  'Prometheus',
  'Overtone',
  'Arabic',
  'Neapolitan Major',
  'Neapolitan Minor',
  'Gypsy',
  'Spanish Gypsy',
  'Hirajoshi',
  'Iwato',
  'Egyptian',
  'Chinese',
];
