import { Note, Scale, ScalePattern } from '../logic.js';

import { ScaleSection } from './ScaleSection.js';
import { KeySection } from './KeySection.js';
import { NotesSection } from './NotesSection.js';
import { CustomNoteSection } from './CustomNoteSection.js';

export function Sections({
  appSetState,
  scaleKey,
  scaleName,
  scaleNameIndex,
  scaleKeyIndex,
}) {
  const allPatterns = ScalePattern.allPatterns().find(
    (p) => p.name === scaleName,
  );

  const customScale = new Scale(new Note(scaleKey), allPatterns);

  return (
    <div>
      <KeySection
        appSetState={appSetState}
        scaleKey={scaleKey}
        scaleKeyIndex={scaleKeyIndex}
        scaleNameIndex={scaleNameIndex}
      />

      <ScaleSection
        appSetState={appSetState}
        scaleName={scaleName}
        scaleKeyIndex={scaleKeyIndex}
        scaleNameIndex={scaleNameIndex}
      />

      <NotesSection customScale={customScale} />

      <CustomNoteSection customScale={customScale} />
    </div>
  );
}
