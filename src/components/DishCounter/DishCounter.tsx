import { FC } from 'react';
import { Count } from '../Count';
import { useCounter } from '../hooks/useCounter';

type Props = {
  id: string;
};

export const DishCounter: FC<Props> = ({ id }) => {
  const { count, increment, decrement } = useCounter(id);
  return <Count count={count} onDecrement={decrement} onIncrement={increment} />;
};
