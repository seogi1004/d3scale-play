import React from 'react';
import Linear from './scale/Linear';
import Power from './scale/Power';
import Sequential from './scale/Sequential';
import './App.css';

function App() {
  return (
    <div className="App">
      <Linear />
      <Power />
      <Sequential />
    </div>
  );
}

export default App;
