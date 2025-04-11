import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../type';
import { selectDishById } from '../../redux/entities/dishes/slice';

type Props = {
  amount: number;
  id: string;
};

export const CartItem: FC<Props> = ({ amount, id }) => {
  const dish = useSelector((state: RootState) => selectDishById(state, id));
  return (
    <span>
      {dish.name} - {amount} шт.
    </span>
  );
};
