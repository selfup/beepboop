import { Note, Scale, ScalePattern } from '../logic.js';

import { ScaleSection } from './Scale.js';
import { KeySection } from './Key.js';
import { NotesSection } from './Notes.js';
import { CustomNoteSection } from './CustomNote.js';
import { Modes } from './Modes.js';

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
    <div className="sections">
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
      {scaleName === 'Major' ? (
        <Modes
          scaleKey={scaleKey}
          scaleName={scaleName}
          customScale={customScale}
        />
      ) : (
        ''
      )}
    </div>
  );
}
