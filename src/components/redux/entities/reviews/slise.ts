import { createSlice } from '@reduxjs/toolkit';
import { normalizedReviews } from '../../../../mock/normalizedMock';
import { NormalizedReviewType, ReviewState } from '../../../../type';

const initialState: ReviewState = {
  entities: normalizedReviews.reduce(
    (acc, dish) => {
      acc[dish.id] = dish;
      return acc;
    },
    {} as Record<string, NormalizedReviewType>,
  ),
  ids: normalizedReviews.map(({ id }) => id),
};

export const reviewsSlice = createSlice({
  name: 'reviewsSlice',
  initialState,
  reducers: {},
  selectors: {
    selectReviewById: (state: ReviewState, id: string) => {
      return state.entities[id];
    },
    selectReviewsIds: (state: ReviewState) => state.ids,
  },
});

export const { selectReviewById, selectReviewsIds } = reviewsSlice.selectors;
