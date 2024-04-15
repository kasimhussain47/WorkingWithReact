import React, { useState } from "react";

const IncrementNum = () => {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState([0]);

  const handleIncrement = () => {
    setCount(count + 1);
    let newNumbers = [];
    for (let i = 0; i <= count + 1; i++) {
      newNumbers.push(i);
    }
    setNumbers(newNumbers);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>

      <div>
        <h2>Numbers:</h2>
        <ul>
          {numbers.map((number) => (
            <li key={number}>{number}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default IncrementNum;
