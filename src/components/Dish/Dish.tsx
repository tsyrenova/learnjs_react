import { FC, useState } from 'react';
import { Count } from '../Count';
import { DishType } from '../../type';
import { MAX_COUNT, MIN_COUNT } from '../constants';

type Props = {
  dish: DishType;
};

export const Dish: FC<Props> = ({ dish }) => {
  const { name, price, ingredients } = dish;
  const [count, setCount] = useState<number>(0);

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

  return (
    <>
      <div>
        <h3>{name}</h3>
        <p>Ингредиенты: {ingredients.length ? ingredients.join(', ') : '-'}</p>
        <p>Цена: {price !== 0 ? price + ' ₽' : '-'}</p>
      </div>
      <Count count={count} onDecrement={decrement} onIncrement={increment} />
    </>
  );
};
