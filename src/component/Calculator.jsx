import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handleClear = () => {
    setInput('');
  };

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly />
      <div className="buttons">
        <div className="row">
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button className='b1' onClick={() => handleClick('+')}>+</button>
        </div>
        <div className="row">
          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button className='b1'  onClick={() => handleClick('-')}>-</button>
        </div>
        <div className="row">
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button className='b1'  onClick={() => handleClick('*')}>*</button>
        </div>
        <div className="row">
          <button className='b1'  onClick={() => handleClick('0')}>0</button>
          <button className='b1'  onClick={() => handleClick('.')}>.</button>
          <button className='b1'  onClick={handleCalculate}>=</button>
          <button className='b1'  onClick={() => handleClick('/')}>/</button>
        </div>
        <div className="row">
          <button className='b2'  onClick={handleClear}>C</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;