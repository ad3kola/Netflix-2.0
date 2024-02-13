import { UserCredentialsProps } from "@/utils/typings";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type InitialStateProps = {
  value: {
    userData: null | UserCredentialsProps;
  };
};

const initialState: InitialStateProps = {
  value: {
    userData: null,
  },
} 

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUserAccount: (
      state,
      action: PayloadAction<UserCredentialsProps>
    ) => {
      state.value.userData = action.payload;
    },
    signOut: () => {
      return initialState;
    },
  },
});

export const { createUserAccount, signOut } =
  userSlice.actions;
export default userSlice.reducer;
