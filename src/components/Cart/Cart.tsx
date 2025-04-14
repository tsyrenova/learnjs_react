import { FC } from 'react';
import s from './Cart.module.css';

import { CartItemContainer } from '../CartItemContainer';
import { Cart as CartItem } from '../../type';

type Props = {
  itemsIds: CartItem[];
};

export const Cart: FC<Props> = ({ itemsIds }) => {
  if (!itemsIds?.length) {
    return null;
  }

  return (
    <div className={s.container}>
      <h3>Корзина</h3>
      {itemsIds.map(({ id }) => {
        return <CartItemContainer key={id} />;
      })}
    </div>
  );
};
