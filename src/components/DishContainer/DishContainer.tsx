import { FC } from 'react';
import { RootState } from '../../type';
import { useSelector } from 'react-redux';
import { selectDishById } from '../../redux/entities/dishes/slice';
import { Dish } from '../Dish/Dish';

type Props = {
  id: string;
};

export const DishContainer: FC<Props> = ({ id }) => {
  const dish = useSelector((state: RootState) => selectDishById(state, id));

  if (!dish) {
    return null;
  }
  const { name, price, ingredients } = dish;
  return <Dish name={name} price={price} ingredients={ingredients} id={id} />;
};
