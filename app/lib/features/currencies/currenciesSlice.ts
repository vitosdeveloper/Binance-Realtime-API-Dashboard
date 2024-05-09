import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export type Currencies = 'BTCUSDT' | 'ETHUSDT' | 'SOLUSDT' | 'DOGEUSDT';
export type ICurrencieSlice = {
  currencies: {
    [key in Currencies]: {
      fp: null | number;
      cp: null | number;
      p: null | number;
    };
  };
};

const initialState: ICurrencieSlice = {
  currencies: {
    BTCUSDT: { fp: null, cp: null, p: 0.0 },
    ETHUSDT: { fp: null, cp: null, p: 0.0 },
    SOLUSDT: { fp: null, cp: null, p: 0.0 },
    DOGEUSDT: { fp: null, cp: null, p: 0.0 },
  },
};

export const currencieSlice = createSlice({
  name: 'counterSlice',
  initialState,
  reducers: {
    updateCurrency: (
      state,
      action: PayloadAction<{
        currencyName: Currencies;
        price: number;
      }>
    ) => {
      const { price, currencyName } = action.payload;
      const selectedCoin = state.currencies[currencyName];
      const fp = selectedCoin.fp ? selectedCoin.fp : price;
      const percentageFrom = (n1: number, n2: number) => (n2 - n1) * (100 / n1);
      const p = selectedCoin.fp ? percentageFrom(selectedCoin.fp, price) : 0;

      state.currencies = {
        ...state.currencies,
        [currencyName]: { fp, p, cp: price },
      };
    },
  },
});

export const { updateCurrency } = currencieSlice.actions;
export const selectCurrencies = (state: RootState) => state.currencies;
export default currencieSlice.reducer;
