import { createSlice } from '@reduxjs/toolkit';
import { normalizedUsers } from '../../../../mock/normalizedMock';
import { NormalizedUserType, UserState } from '../../../../type';

const initialState: UserState = {
  entities: normalizedUsers.reduce(
    (acc, user) => {
      acc[user.id] = user;
      return acc;
    },
    {} as Record<string, NormalizedUserType>,
  ),
  ids: normalizedUsers.map(({ id }) => id),
};

export const usersSlice = createSlice({
  name: 'usersSlice',
  initialState,
  reducers: {},
  selectors: {
    selectUserById: (state: UserState, id: string) => {
      return state.entities[id];
    },
    selectUserIds: (state: UserState) => state.ids,
  },
});

export const { selectUserById, selectUserIds } = usersSlice.selectors;
