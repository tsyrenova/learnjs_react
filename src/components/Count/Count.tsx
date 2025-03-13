import { useState } from 'react';
import { MAX_DISHES, MIN_DISHES } from '../constants';

export const Count = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    if (count < MAX_DISHES) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  const decrement = () => {
    if (count > MIN_DISHES) {
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
