import { createSlice } from '@reduxjs/toolkit';
import { normalizedRestaurants } from '../../../../mock/normalizedMock';
import { NormalizedRestaurantType, RestaurantState } from '../../../../type';

const initialState: RestaurantState = {
  entities: normalizedRestaurants.reduce(
    (acc, restaurant) => {
      acc[restaurant.id] = restaurant;
      return acc;
    },
    {} as Record<string, NormalizedRestaurantType>,
  ),
  ids: normalizedRestaurants.map(({ id }) => id),
};

export const restaurantsSlice = createSlice({
  name: 'restaurantsSlice',
  initialState,
  reducers: {},
  selectors: {
    selectRestaurantById: (state: RestaurantState, id: string) => {
      return state.entities[id];
    },
    selectRestaurantsIds: (state: RestaurantState) => state.ids,
  },
});

export const { selectRestaurantById, selectRestaurantsIds } = restaurantsSlice.selectors;
