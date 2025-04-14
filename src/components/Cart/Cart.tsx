import { FC } from 'react';

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
    <div style={{ height: 50 }}>
      <h3>Корзина</h3>
      {itemsIds.map(({ id }) => {
        return <CartItemContainer key={id} />;
      })}
    </div>
  );
};
