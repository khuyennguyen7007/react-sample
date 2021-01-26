import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from '@web/services/user/slices';

export const rootReducer = combineReducers({
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
