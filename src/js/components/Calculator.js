import React, { Component } from 'react';

export default class Calculator extends Component {
  render() {
    return (
      <div className="calculator">
        <div className="calculator-display">123.3</div>
        <div className="calculator-keypad">
          <div className="calculator-keypad-left">
            <div className="calculator-top">
              <button className="calculator-key key-c">C</button>
              <button className="calculator-key key-sign">&plusmn;</button>
              <button className="calculator-key key-percent">&#37;</button>
            </div>
            <div className="calculator-numbers">
              <button className="calculator-key key-7">7</button>
              <button className="calculator-key key-8">8</button>
              <button className="calculator-key key-9">9</button>
              <button className="calculator-key key-4">4</button>
              <button className="calculator-key key-5">5</button>
              <button className="calculator-key key-6">6</button>
              <button className="calculator-key key-1">1</button>
              <button className="calculator-key key-2">2</button>
              <button className="calculator-key key-3">3</button>
              <button className="calculator-key key-0">0</button>
              <button className="calculator-key key-dot">.</button>
            </div>
          </div>
          <div className="calculator-actions">
            <button className="calculator-key key-divide">&nbsp;</button>
            <button className="calculator-key key-multiply">&times;</button>
            <button className="calculator-key key-subtract">-</button>
            <button className="calculator-key key-add">+</button>
            <button className="calculator-key key-compute">=</button>
          </div>
        </div>
      </div>
    )
  }
}