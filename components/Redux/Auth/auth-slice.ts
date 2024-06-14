import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  isAuth: boolean;
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  refreshToken: string;
  accessToken: string;
};

type AIState = {
  input: string;
  showResult: boolean;
  resultData: string;
};

const initialAuthState: AuthState = {
  isAuth: false,
  id: "",
  firstname: "",
  lastname: "",
  email: "",
  refreshToken: "",
  accessToken: ""
};

const initialAIState: AIState = {
  input: "",
  showResult: false,
  resultData: ""
};

export const auth = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    logOut: () => initialAuthState,
    logIn: (state, action: PayloadAction<AuthState>) => {
      state.id = action.payload.id;
      state.firstname = action.payload.firstname;
      state.lastname = action.payload.lastname;
      state.email = action.payload.email;
      state.isAuth = true;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
  },
});

export const ai = createSlice({
  name: "ai",
  initialState: initialAIState,
  reducers: {
    Generate: (state, action: PayloadAction<{ input: string }>) => {
      state.input = action.payload.input;
    },
    ShowResult: (state, action: PayloadAction<{ resultData: string }>) => {
      state.resultData = action.payload.resultData;
    },
    HideResult:() => initialAIState
  },
});

export const { logIn, logOut } = auth.actions;
export const { Generate, ShowResult,HideResult } = ai.actions;

const rootReducer = {
  auth: auth.reducer,
  ai: ai.reducer,
};

export default rootReducer;
