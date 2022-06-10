import React from 'react';
import Linear from './scale/Linear';
import Power from './scale/Power';
import Sequential from './scale/Sequential';
import Diverging from './scale/Diverging';
import Radial from './scale/Radial';
import Threshold from './scale/Threshold';
import Quantile from './scale/Quantile';
import Quantize from './scale/Quantize';
import Ordinal from './scale/Ordinal';
import Log from './scale/Log';
import Time from './scale/Time';
import Band from './scale/Band';
import Point from './scale/Point';
import './App.css';

function App() {
  return (
    <div className="App">
      <Point />
    </div>
  );
}

export default App;
