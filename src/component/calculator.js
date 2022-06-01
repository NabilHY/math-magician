import React, { useState } from 'react';
import calculate from '../logic/calculate';
import './styles.css';

function calculator() {
  const initial = {
    total: 0,
    next: null,
    operation: null,
  };
  const [calculator, setCalculator] = useState(initial);

  const clickHandler = (e) => {
    setCalculator((calculator) => ({
      ...calculator,
      ...calculate(calculator, e.target.name),
    }));
  };
  const { total, next, operation } = calculator;
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
          <button onClick={clickHandler} name="AC" type="button" className="btn">AC</button>
          <button onClick={clickHandler} name="+/-" type="button" className="btn">+/-</button>
          <button onClick={clickHandler} name="%" type="button" className="btn">%</button>
          <button onClick={clickHandler} name="÷" type="button" className="btn methods">÷</button>
          <button onClick={clickHandler} name="7" type="button" className="btn">7</button>
          <button onClick={clickHandler} name="8" type="button" className="btn">8</button>
          <button onClick={clickHandler} name="9" type="button" className="btn">9</button>
          <button onClick={clickHandler} name="x" type="button" className="btn methods">x</button>
          <button onClick={clickHandler} name="4" type="button" className="btn">4</button>
          <button onClick={clickHandler} name="5" type="button" className="btn">5</button>
          <button onClick={clickHandler} name="6" type="button" className="btn">6</button>
          <button onClick={clickHandler} name="-" type="button" className="btn methods">-</button>
          <button onClick={clickHandler} name="1" type="button" className="btn">1</button>
          <button onClick={clickHandler} name="2" type="button" className="btn">2</button>
          <button onClick={clickHandler} name="3" type="button" className="btn">3</button>
          <button onClick={clickHandler} name="+" type="button" className="btn methods">+</button>
          <button onClick={clickHandler} name="0" type="button" className="btn span-2">0</button>
          <button onClick={clickHandler} name="." type="button" className="btn">.</button>
          <button onClick={clickHandler} name="=" type="button" className="btn methods">=</button>
        </div>
      </div>
    </section>
  );
}

export default calculator;
