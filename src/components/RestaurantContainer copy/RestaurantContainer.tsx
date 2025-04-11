import { FC } from 'react';
import { Restaurant } from '../Restaurant/Restaurant';
import { selectRestaurantById } from '../../redux/entities/restaurants/slice';
import { RootState } from '../../type';
import { useSelector } from 'react-redux';

type Props = {
  id: string;
};

export const RestaurantContainer: FC<Props> = ({ id }) => {
  const restaurant = useSelector((state: RootState) => selectRestaurantById(state, id));

  if (!restaurant) {
    return null;
  }

  const { name, menu, reviews } = restaurant;

  return <Restaurant name={name} menu={menu} reviews={reviews} />;
};
