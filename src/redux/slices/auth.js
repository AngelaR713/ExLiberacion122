import { createSlice } from "@reduxjs/toolkit";

const dataStored = localStorage.getItem("auth");
const dataParsed = dataStored ? JSON.parse(dataStored) : null;


export const authSlice = createSlice({
  name: "auth",
  initialState: {
    value: {
      isAuth: dataParsed != null ? dataParsed.isAuth : false,
      user: dataParsed != null ? dataParsed.email : "",
    },
  },
  reducers: {
    setAuthValue: (state, actions) => {
      state.value = actions.payload;
    },
  },
});

export const { setAuthValue } = authSlice.actions;
export default authSlice.reducer;
