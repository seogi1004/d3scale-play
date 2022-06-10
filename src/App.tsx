import React from 'react';
import Linear from './scale/Linear';
import Power from './scale/Power';
import Sequential from './scale/Sequential';
import Diverging from './scale/Diverging';
import Radial from './scale/Radial';
import Threshold from './scale/Threshold';
import Log from './scale/Log';
import Time from './scale/Time';
import './App.css';

function App() {
  return (
    <div className="App">
      <Time />
    </div>
  );
}

export default App;
