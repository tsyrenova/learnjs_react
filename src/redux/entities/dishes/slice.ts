import { createSlice } from '@reduxjs/toolkit';
import { normalizedDishes } from '../../../mock/normalizedMock';
import { NormalizedDishType, DishState } from '../../../type';

const initialState: DishState = {
  entities: normalizedDishes.reduce(
    (acc, dish) => {
      acc[dish.id] = dish;
      return acc;
    },
    {} as Record<string, NormalizedDishType>,
  ),
  ids: normalizedDishes.map(({ id }) => id),
};

export const dishesSlice = createSlice({
  name: 'dishesSlice',
  initialState,
  reducers: {},
  selectors: {
    selectDishById: (state: DishState, id: string) => {
      return state.entities[id];
    },
    selectDishesIds: (state: DishState) => state.ids,
  },
});

export const { selectDishById, selectDishesIds } = dishesSlice.selectors;
