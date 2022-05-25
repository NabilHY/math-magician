import React from 'react';
import './styles.css';

class Calculator extends React.PureComponent {
  render() {
    return (
      <section className="component">
        <div className="calc">
          <input value="0" type="number" className="display" disabled />
          <div className="buttons">
            <button type="button" className="btn">AC</button>
            <button type="button" className="btn">+/-</button>
            <button type="button" className="btn">%</button>
            <button type="button" className="btn methods">÷</button>
            <button type="button" className="btn">7</button>
            <button type="button" className="btn">8</button>
            <button type="button" className="btn">9</button>
            <button type="button" className="btn methods">x</button>
            <button type="button" className="btn">4</button>
            <button type="button" className="btn">5</button>
            <button type="button" className="btn">6</button>
            <button type="button" className="btn methods">-</button>
            <button type="button" className="btn">1</button>
            <button type="button" className="btn">2</button>
            <button type="button" className="btn">3</button>
            <button type="button" className="btn methods">+</button>
            <button type="button" className="btn span-2">0</button>
            <button type="button" className="btn">.</button>
            <button type="button" className="btn methods">=</button>
          </div>
        </div>
      </section>
    );
  }
}

export default Calculator;
