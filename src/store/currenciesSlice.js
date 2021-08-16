import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCurrencies } from "api";

export const getAllCurrency = createAsyncThunk(
  "crypto/getAllCurrency",
  async () => {
    return await getCurrencies();
  }
);

const currenciesSlice = createSlice({
  name: "crypto",
  initialState: {
    currencies: [],
    status: null,
  },
  extraReducers: {
    [getAllCurrency.pending]: (state, action) => {
      state.status = "loading";
    },
    [getAllCurrency.fulfilled]: (state, action) => {
      state.status = "success";
      state.currencies = action.payload;
    },
    [getAllCurrency.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default currenciesSlice.reducer;
