import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { UserType } from '../interfaces/index';

type InitialStateType = {
  user: UserType
}

const initialState:InitialStateType = {
  user: { uid: "",email: "", name: "" }
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload
    },
    logout: (state) => {
      state.user = initialState.user
    },
    updateUserProfile: (state, action: PayloadAction<UserType>) => {
      state.user.name = action.payload.name;
    }
  },
});

export const { login, logout,updateUserProfile } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;