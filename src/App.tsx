import React, { FC, useState } from 'react';

const App: FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
      <header>
        <h1>カウンター</h1>
      </header>
      <p>{count}</p>
      <button onClick={decrement}>-1</button>
      <button onClick={increment}>+1</button>
    </div>
  );
};

export default App;
