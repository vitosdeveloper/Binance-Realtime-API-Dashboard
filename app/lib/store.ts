import { configureStore } from '@reduxjs/toolkit';
import currenciesSlice from './features/currencies/currenciesSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      currencies: currenciesSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
