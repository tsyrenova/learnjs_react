import { createSlice } from '@reduxjs/toolkit';
import { Cart, CartState } from '../../../type';

const initialCartState: CartState = {};

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: initialCartState,
  reducers: {
    addToCart: (state: CartState, { payload }) => {
      state[payload] = (state[payload] || 0) + 1;
    },
    removeFromCart: (state, { payload }) => {
      if (!state[payload]) {
        return state;
      }

      state[payload] = state[payload] - 1;

      if (state[payload] <= 0) {
        delete state[payload];
      }
    },
  },
  selectors: {
    selectCartItems: (state: CartState) =>
      Object.keys(state).reduce((acc: Cart[], id) => {
        acc.push({ id, amount: state[id] });

        return acc;
      }, []),
    selectAmountByItemId: (state, id) => state[id],
  },
});

export const { selectAmountByItemId, selectCartItems } = cartSlice.selectors;
export const { addToCart, removeFromCart } = cartSlice.actions;
