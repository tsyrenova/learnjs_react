import React from 'react';
import { Count } from '../Count';
import { DishType } from '../../type';

type Props = {
  dish: DishType;
};

export const Dish: React.FC<Props> = ({ dish }) => {
  const { name, price, ingredients } = dish;

  return (
    <>
      <div>
        <h3>{name}</h3>
        <p>Ингредиенты: {ingredients.length ? ingredients.join(', ') : '-'}</p>
        <p>Цена: {price !== 0 ? price + ' ₽' : '-'}</p>
      </div>
      <Count />
    </>
  );
};
