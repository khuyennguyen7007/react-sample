import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from '../models/user-state.model';
import { User } from '../models/user.model';

const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser(state) {
      state.loading = true;
      state.error = null;
    },
    getUserSuccess(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.loading = false;
    },
    getUserFail(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getUser, getUserSuccess, getUserFail } = userSlice.actions;

export const userReducer = userSlice.reducer;