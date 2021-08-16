import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCurrency } from "api";

export const fetchCurrency = createAsyncThunk(
  "crypto/getCurrency",
  async (id) => {
    return await getCurrency(id);
  }
);

const currencySlice = createSlice({
  name: "crypto",
  initialState: {
    currency: null,
    status: null,
  },
  extraReducers: {
    [fetchCurrency.pending]: (state) => {
      state.status = "loading";
    },
    [fetchCurrency.fulfilled]: (state, action) => {
      state.status = "success";
      state.currency = action.payload;
    },
    [fetchCurrency.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default currencySlice.reducer;
