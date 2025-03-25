import { FC } from 'react';
import s from './Count.module.css';

type Props = {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
};

export const Count: FC<Props> = ({ count, onIncrement, onDecrement }) => {
  return (
    <div className={s.wrapper}>
      <button type="button" onClick={onIncrement}>
        +
      </button>
      <div>{count}</div>
      <button type="button" onClick={onDecrement}>
        -
      </button>
    </div>
  );
};
