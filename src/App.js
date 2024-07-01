import './App.css';
import {keyNames, scaleNames, Note, Scale, ScalePattern} from './logic.js';
import { useState } from 'react';

function Notes({stateChanger, scaleKey, scaleName, scaleNameIndex, keyNameIndex}) {
  const customScale = new Scale(
    new Note(scaleKey),
    ScalePattern.allPatterns().find(p => p.name === scaleName),
  );

  const concertNotes = customScale.notes().map(note => note.name).join(', ');
  const altoSax = customScale.transposeForAltoSax().map(note => note.name).join(', ');
  const tenorSax = customScale.transposeForTenorSax().map(note => note.name).join(', ');
  const lowEString = customScale.toFretsOnString('E').join(', ');
  const LowCString = customScale.toFretsOnString('C').join(', ');

  return (
    <div>
      Key: <b>{scaleKey}</b>
      <div>
        {keyNames.map((name, idx) =>
          <button
            key={idx}
            onClick={() => stateChanger({keyNameIndex: idx, scaleNameIndex})}
          >
            {name}
          </button>
        )}
      </div>
      <div>
        <p></p>
      </div>
      Scale: <b>{scaleName}</b>
      <div>
        {scaleNames.map((name, idx) =>
          <button
            key={idx}
            onClick={() => stateChanger({ keyNameIndex, scaleNameIndex: idx })}
          >
            {name}
          </button>
        )}
      </div>

      <p>Concert Notes:
        <b> {concertNotes}</b>
      </p>

      <p>Alto Sax:
        <b> {altoSax}</b>
      </p>

      <p>Tenor Sax:
        <b> {tenorSax}</b>
      </p>
      
      <p>Low E String:
        <b> {lowEString} </b>
      </p>

      <p>Low C String:
        <b> {LowCString}</b>
      </p>
    </div>    
  )
}

function App() {
  const [state, setState] = useState({
    keyNameIndex: 0,
    scaleNameIndex: 0,
  });

  const { keyNameIndex, scaleNameIndex } = state;

  const scaleKey = keyNames[keyNameIndex];
  const scaleName = scaleNames[scaleNameIndex];

  return (
    <div className="App">
      <header className="App-header">
          <Notes
            stateChanger={setState}
            scaleKey={scaleKey}
            scaleName={scaleName}
            scaleNameIndex={scaleNameIndex}
            keyNameIndex={keyNameIndex}
          />
        
      </header>
    </div>
  );
}

export default App;
