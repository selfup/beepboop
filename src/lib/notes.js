import { keyNames } from './keys';

export const Note = (name) => ({ name });

export const allNotes = () => keyNames.map((name) => ({ name }));

export const nextNote = (name) => {
  const notes = allNotes();

  const currentIndex = notes.findIndex((note) => note.name === name);

  const nextIndex = (currentIndex + 1) % notes.length;

  return notes[nextIndex];
};
