import { FC, use } from 'react';
import { Count } from '../Count';
import { DishType } from '../../type';
import { useCounter } from '../hooks/useCounter';
import { AuthContext } from '../AuthContext';

type Props = {
  dish: DishType;
};

export const Dish: FC<Props> = ({ dish }) => {
  const { name, price, ingredients } = dish;
  const { count, increment, decrement } = useCounter(0);
  const { user } = use(AuthContext);

  return (
    <>
      <div>
        <h3>{name}</h3>
        <p>Ингредиенты: {ingredients.length ? ingredients.join(', ') : '-'}</p>
        <p>Цена: {price !== 0 ? price + ' ₽' : '-'}</p>
      </div>
      {user?.name && <Count count={count} onDecrement={decrement} onIncrement={increment} />}
    </>
  );
};
