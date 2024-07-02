import './App.css';
import {keyNames, scaleNames, Note, Scale, ScalePattern} from './logic.js';
import { useState } from 'react';

function Notes({stateChanger, scaleKey, scaleName, scaleNameIndex, keyNameIndex}) {
  const [state, setState] = useState({
    customStringIndex: 0,
  });

  const customScale = new Scale(
    new Note(scaleKey),
    ScalePattern.allPatterns().find(p => p.name === scaleName),
  );

  const concertNotes = customScale.notes().map(note => note.name).join(', ');
  const altoSax = customScale.transposeForAltoSax().map(note => note.name).join(', ');
  const tenorSax = customScale.transposeForTenorSax().map(note => note.name).join(', ');
  const lowEString = customScale.toFretsOnString('E').join(', ');
  
  const customStringNote = keyNames[state.customStringIndex];

  return (
    <div>
      
      Key: <b>{scaleKey}</b>
      <div className='section'>
        {keyNames.map((name, idx) =>
          <button
            className='key-button'
            key={idx}
            onClick={() => stateChanger({keyNameIndex: idx, scaleNameIndex})}
          >
            {name}
          </button>
        )}
      </div>

      Scale: <b>{scaleName}</b>
      <div className='section'>
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

      <p>Alto Sax (Eb):
        <b> {altoSax}</b>
      </p>

      <p>Tenor Sax (Bb):
        <b> {tenorSax}</b>
      </p>
      
      <p>Low E String:
        <b> {lowEString} </b>
      </p>

      <br></br>
      Custom String Note: <b>{customStringNote}</b>
      <div className='section'>
        {keyNames.map((name, idx) =>
          <button
            className='key-button'
            key={idx}
            onClick={() => setState({ customStringIndex: idx })}
          >
            {name}
          </button>
        )}
      </div>
      <p>Custom String <b>{customStringNote}</b>: {customScale.toFretsOnString(customStringNote).join(', ')}</p>
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
