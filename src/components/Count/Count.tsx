import { useState } from 'react';

export const Count = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    if (count < 5) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div>
      <div>{count}</div>
      <div>
        <div onClick={increment}>+</div>
        <div onClick={decrement}>-</div>
      </div>
    </div>
  );
};
