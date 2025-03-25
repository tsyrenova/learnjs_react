import { useState } from 'react';
import { MAX_COUNT, MIN_COUNT } from '../constants';

export const useCounter = (initialValue: number = 0) => {
  const [count, setCount] = useState<number>(initialValue);

  const increment = () => {
    if (count < MAX_COUNT) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  const decrement = () => {
    if (count > MIN_COUNT) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return { count, increment, decrement };
};
