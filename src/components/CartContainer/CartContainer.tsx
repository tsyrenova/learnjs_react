import { useSelector } from 'react-redux';
import { Cart } from '../Cart';
import { selectCartItems } from '../../redux/entities/cart/slice';

export const CartContainer = () => {
  const itemsIds = useSelector(selectCartItems);

  if (!itemsIds?.length) {
    return null;
  }

  return <Cart itemsIds={itemsIds} />;
};
