import React from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="calculator-container">
        <div className="calculator-display">0</div>

        <div className="calculator-row">
          <div className="calculator-box">1</div>
          <div className="calculator-box">2</div>
          <div className="calculator-box">3</div>
          <div className="calculator-box">/</div>
        </div>
        <div className="calculator-row">
          <div className="calculator-box">4</div>
          <div className="calculator-box">5</div>
          <div className="calculator-box">6</div>
          <div className="calculator-box">x</div>
        </div>
        <div className="calculator-row">
          <div className="calculator-box">7</div>
          <div className="calculator-box">8</div>
          <div className="calculator-box">9</div>
          <div className="calculator-box">-</div>
        </div>
        <div className="calculator-row">
          <div className="calculator-box">.</div>
          <div className="calculator-box">0</div>
          <div className="calculator-box">=</div>
          <div className="calculator-box">+</div>
        </div>
      </div>
    </div>
  );
}

export default App;
