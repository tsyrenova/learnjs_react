import { FC, use } from 'react';
import { AuthContext } from '../AuthContext';
import { DishCounter } from '../DishCounter';

type Props = {
  id: string;
  name: string;
  price: number;
  ingredients: string[];
};

export const Dish: FC<Props> = ({ name, price, ingredients, id }) => {
  const { user } = use(AuthContext);

  return (
    <>
      <div>
        <h3>{name}</h3>
        <p>Ингредиенты: {ingredients.length ? ingredients.join(', ') : '-'}</p>
        <p>Цена: {price !== 0 ? price + ' ₽' : '-'}</p>
      </div>
      {user?.name && <DishCounter id={id} />}
    </>
  );
};
