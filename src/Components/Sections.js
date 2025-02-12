import { ScaleSection } from './Scale.js';
import { KeySection } from './Key.js';
import { NotesSection } from './Notes.js';
import { Modes } from './Modes.js';
import { Triads } from './Triads.js';
import { TransposeSection } from './Transpose';

import { Note } from '../lib/notes.js';
import { Scale } from '../lib/scales.js';
import { allPatterns } from '../lib/patterns.js';
import { CircleOfFourths } from './CircleOfFourths.js';

export function Sections({
  appSetState,
  scaleKey,
  scaleName,
  scaleNameIndex,
  scaleKeyIndex,
}) {
  const scalePatterns = allPatterns().find(
    (p) => p.name === scaleName,
  );

  const customScale = Scale(Note(scaleKey), scalePatterns);

  const customScaleIntervals = scalePatterns.intervals;

  return (
    <div className="sections">
      <TransposeSection />
      <KeySection
        appSetState={appSetState}
        scaleKey={scaleKey}
        scaleNameIndex={scaleNameIndex}
      />
      <ScaleSection
        appSetState={appSetState}
        scaleName={scaleName}
        scaleKeyIndex={scaleKeyIndex}
        customScaleIntervals={customScaleIntervals}
      />
      <NotesSection customScale={customScale} />
      <Modes
        scaleKey={scaleKey}
        scaleName={scaleName}
        customScale={customScale}
      />
      <Triads
        scaleKey={scaleKey}
        scaleName={scaleName}
        customScale={customScale}
      />
      <CircleOfFourths />
    </div>
  );
}
