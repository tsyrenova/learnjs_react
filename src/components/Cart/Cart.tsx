import { FC, Fragment } from 'react';

import { CartItemContainer } from '../CartItemContainer';

type Item = {
  amount: number;
  id: string;
};

type Props = {
  itemsIds: Item[];
};

export const Cart: FC<Props> = ({ itemsIds }) => {
  if (!itemsIds?.length) {
    return null;
  }

  return (
    <div style={{ height: 50 }}>
      <h3>Корзина</h3>
      {itemsIds.map(({ id }) => {
        return (
          <Fragment key={id}>
            <CartItemContainer />
          </Fragment>
        );
      })}
    </div>
  );
};
