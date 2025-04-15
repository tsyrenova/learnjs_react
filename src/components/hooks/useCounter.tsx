import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, selectAmountByItemId } from '../../redux/entities/cart/slice';

export const useCounter = (id: string) => {
  const dispatch = useDispatch();
  const count = useSelector((state) => selectAmountByItemId(state, id)) || 0;

  const increment = useCallback(() => dispatch(addToCart(id)), [id, dispatch]);

  const decrement = useCallback(() => dispatch(removeFromCart(id)), [id, dispatch]);

  return { count, increment, decrement };
};
