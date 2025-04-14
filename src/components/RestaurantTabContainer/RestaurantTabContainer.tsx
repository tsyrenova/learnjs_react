import { FC } from 'react';
import { Button } from '../Button';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/slice';
import { RootState } from '../../type';

type Props = {
  id: string;
  onClick: () => void;
  disabled: boolean;
  isActive: boolean;
};

export const RestaurantTabContainer: FC<Props> = ({ id, onClick, disabled, isActive }) => {
  const restaurant = useSelector((state: RootState) => selectRestaurantById(state, id));
  if (!restaurant) {
    return null;
  }

  return (
    <Button
      key={id}
      title={restaurant.name}
      onClick={onClick}
      disabled={disabled}
      colorViewVariant={isActive ? 'active' : 'default'}
    />
  );
};
