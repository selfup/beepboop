import { useState } from 'react';
import { keyNames } from './lib/keys.js';
import { scaleNames } from './lib/scales.js';

import { Sections } from './Components/Sections.js';
import './App.css';

function App() {
  const [state, setState] = useState({
    scaleKeyIndex: 0,
    scaleNameIndex: 0,
  });

  const { scaleKeyIndex, scaleNameIndex } = state;

  const scaleKey = keyNames[scaleKeyIndex];
  const scaleName = scaleNames[scaleNameIndex];

  return (
    <div className="App">
      <header className="App-header">
        <Sections
          appSetState={setState}
          scaleKey={scaleKey}
          scaleName={scaleName}
          scaleNameIndex={scaleNameIndex}
          scaleKeyIndex={scaleKeyIndex}
        />
      </header>
    </div>
  );
}

export default App;
