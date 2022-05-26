import React from 'react';
import calculate from '../logic/calculate';
import './styles.css';

class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    this.setState((state) => ({
      ...state,
      ...calculate(state, e.target.name),
    }));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <section className="component">
        <div className="calc">
          <div className="display">
            {next}
            {' '}
            {operation}
            {' '}
            {total}
          </div>
          <div className="buttons">
            <button onClick={this.clickHandler} name="AC" type="button" className="btn">AC</button>
            <button onClick={this.clickHandler} name="+/-" type="button" className="btn">+/-</button>
            <button onClick={this.clickHandler} name="%" type="button" className="btn">%</button>
            <button onClick={this.clickHandler} name="÷" type="button" className="btn methods">÷</button>
            <button onClick={this.clickHandler} name="7" type="button" className="btn">7</button>
            <button onClick={this.clickHandler} name="8" type="button" className="btn">8</button>
            <button onClick={this.clickHandler} name="9" type="button" className="btn">9</button>
            <button onClick={this.clickHandler} name="x" type="button" className="btn methods">x</button>
            <button onClick={this.clickHandler} name="4" type="button" className="btn">4</button>
            <button onClick={this.clickHandler} name="5" type="button" className="btn">5</button>
            <button onClick={this.clickHandler} name="6" type="button" className="btn">6</button>
            <button onClick={this.clickHandler} name="-" type="button" className="btn methods">-</button>
            <button onClick={this.clickHandler} name="1" type="button" className="btn">1</button>
            <button onClick={this.clickHandler} name="2" type="button" className="btn">2</button>
            <button onClick={this.clickHandler} name="3" type="button" className="btn">3</button>
            <button onClick={this.clickHandler} name="+" type="button" className="btn methods">+</button>
            <button onClick={this.clickHandler} name="0" type="button" className="btn span-2">0</button>
            <button onClick={this.clickHandler} name="." type="button" className="btn">.</button>
            <button onClick={this.clickHandler} name="=" type="button" className="btn methods">=</button>
          </div>
        </div>
      </section>
    );
  }
}

export default Calculator;
