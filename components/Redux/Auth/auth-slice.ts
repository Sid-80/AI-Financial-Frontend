import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  isAuth: boolean;
  id:string;
  username: string;
  email: string;
  refreshToken:string;
  accessToken:string;
};

const initialState: AuthState = {
  id:"",
    isAuth: false,
    username: "",
    email: "",
    accessToken: "",
    refreshToken: ""
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: () => {
      return initialState;
    },
    logIn: (state, action: PayloadAction<any>) => {
      state.id = action.payload.id
      state.email = action.payload.email;
      state.isAuth = true;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.username = action.payload.username;
    },
  },
});

export const { logIn, logOut } = auth.actions;
export default auth.reducer;