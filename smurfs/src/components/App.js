import React, { useState } from "react";
import "./App.css";
import SmurfList from './SmurfList';
import Form from './SmurfForm';

function App() {
  const [newSmurf, setNewSmurf] = useState({ name: '', age: '', height: '', id: -1 });

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
      <Form newSmurf={newSmurf} setNewSmurf={setNewSmurf} />
      <SmurfList setNewSmurf={setNewSmurf} />
    </div>
  );
}

export default App;
