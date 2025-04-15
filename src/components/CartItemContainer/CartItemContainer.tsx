import { useSelector } from 'react-redux';
import { selectCartItems } from '../../redux/entities/cart/slice';
import { CartItem } from '../CartItem';

export const CartItemContainer = () => {
  const items = useSelector(selectCartItems);
  if (!items) {
    return null;
  }
  return (
    <ul>
      {items.map(({ id, amount }) => (
        <li key={id}>
          <CartItem id={id} amount={amount} />;
        </li>
      ))}
    </ul>
  );
};
