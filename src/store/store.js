import { configureStore } from "@reduxjs/toolkit";

import currenciesSlice from "./currenciesSlice";
import currencySlice from "./currencySlice";

const store = configureStore({
  reducer: {
    currencies: currenciesSlice,
    currency: currencySlice,
  },
});

export default store;
