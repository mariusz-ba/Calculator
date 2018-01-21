import React, { Component } from 'react';
import AutoScaleText from './AutoScaleText';

export default class Calculator extends Component {
  state = {
    displayValue: '0',
    prevValue: 0,
    operator: null
  }

  numberClicked(number) {
    const { displayValue } = this.state;

    this.setState({
      displayValue: displayValue === '0' ? String(number) : displayValue + String(number)
    })
  }

  dotClicked() {
    const { displayValue } = this.state;

    this.setState({
      displayValue: displayValue.indexOf('.') === -1 ? displayValue + '.' : displayValue
    })
  }

  clearDisplay() {
    this.setState({
      displayValue: '0',
      prevValue: 0,
      operator: null
    })
  }

  toggleSign() {
    const { displayValue } = this.state;

    this.setState({
      displayValue: displayValue.charAt(0) === '-' ? displayValue.substr(1) : '-' + displayValue
    })
  }

  percentClicked() {
    const { displayValue } = this.state;

    this.setState({
      displayValue: String(parseFloat(displayValue) / 100)
    })
  }

  handleOperation(operation) {

    const { operator, displayValue, prevValue } = this.state;

    const operations = {
      '/': (prevValue, nextValue) => (prevValue / nextValue),
      '*': (prevValue, nextValue) => (prevValue * nextValue),
      '-': (prevValue, nextValue) => (prevValue - nextValue),
      '+': (prevValue, nextValue) => (prevValue + nextValue),
      '=': (prevValue, nextValue) => (nextValue)
    }

    if(operator === null && operation !== '=') {
      this.setState({
        prevValue: parseFloat(displayValue),
        operator: operation,
        displayValue: '0'
      })
    } else if(prevValue !== 0) {
      this.setState({
        displayValue: String(operations[operator](prevValue, parseFloat(displayValue))),
        operator: null,
        prevValue: 0
      })
    }

  }

  render() {
    const { displayValue } = this.state;

    return (
      <div className="calculator">
        <div className="calculator-display"><AutoScaleText>{displayValue}</AutoScaleText></div>
        <div className="calculator-keypad">
          <div className="calculator-keypad-left">
            <div className="calculator-top">
              <button className="calculator-key key-c" onClick={() => this.clearDisplay()}>C</button>
              <button className="calculator-key key-sign" onClick={() => this.toggleSign()}>&plusmn;</button>
              <button className="calculator-key key-percent" onClick={() => this.percentClicked()}>&#37;</button>
            </div>
            <div className="calculator-numbers">
              <button className="calculator-key key-7" onClick={() => this.numberClicked(7)}>7</button>
              <button className="calculator-key key-8" onClick={() => this.numberClicked(8)}>8</button>
              <button className="calculator-key key-9" onClick={() => this.numberClicked(9)}>9</button>
              <button className="calculator-key key-4" onClick={() => this.numberClicked(4)}>4</button>
              <button className="calculator-key key-5" onClick={() => this.numberClicked(5)}>5</button>
              <button className="calculator-key key-6" onClick={() => this.numberClicked(6)}>6</button>
              <button className="calculator-key key-1" onClick={() => this.numberClicked(1)}>1</button>
              <button className="calculator-key key-2" onClick={() => this.numberClicked(2)}>2</button>
              <button className="calculator-key key-3" onClick={() => this.numberClicked(3)}>3</button>
              <button className="calculator-key key-0" onClick={() => this.numberClicked(0)}>0</button>
              <button className="calculator-key key-dot" onClick={() => this.dotClicked()}>.</button>
            </div>
          </div>
          <div className="calculator-actions">
            <button className="calculator-key key-divide" onClick={() => this.handleOperation('/')}>&nbsp;</button>
            <button className="calculator-key key-multiply" onClick={() => this.handleOperation('*')}>&times;</button>
            <button className="calculator-key key-subtract" onClick={() => this.handleOperation('-')}>-</button>
            <button className="calculator-key key-add" onClick={() => this.handleOperation('+')}>+</button>
            <button className="calculator-key key-compute" onClick={() => this.handleOperation('=')}>=</button>
          </div>
        </div>
      </div>
    )
  }
}