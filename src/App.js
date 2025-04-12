/* Copyright © 2025 Regis Jean-Pierre Boudinot. All Rights Reserved */

import { useState } from 'react';
import { keyNames } from './lib/keys.js';
import { scaleNames } from './lib/scales.js';

import { Sections } from './Components/Sections.js';
import './App.css';

function App() {
  const [state, setState] = useState({
    scaleKeyIndex: 0,
    scaleNameIndex: 0,
    notesToTranspose: [],
    transposedNotes: [],
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
        <p>Copyright © 2024 Regis Jean-Pierre Boudinot. All Rights Reserved</p>
      </header>
    </div>
  );
}

export default App;
