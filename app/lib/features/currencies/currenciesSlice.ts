import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { CurrenciesNames, CurrenciesSlice } from '@/app/types/Currencies';

const initialState: CurrenciesSlice = {
  currencies: {
    BTCUSDT: {
      firstPrice: null,
      currentPrice: null,
      percentual: 0.0,
    },
    ETHUSDT: {
      firstPrice: null,
      currentPrice: null,
      percentual: 0.0,
    },
    SOLUSDT: {
      firstPrice: null,
      currentPrice: null,
      percentual: 0.0,
    },
    DOGEUSDT: {
      firstPrice: null,
      currentPrice: null,
      percentual: 0.0,
    },
  },
};

export const currencieSlice = createSlice({
  name: 'counterSlice',
  initialState,
  reducers: {
    updateCurrency: (
      state,
      action: PayloadAction<{
        currencyName: CurrenciesNames;
        price: number;
      }>
    ) => {
      const { price, currencyName } = action.payload;
      const selectedCoin = state.currencies[currencyName];
      const firstPrice = selectedCoin.firstPrice
        ? selectedCoin.firstPrice
        : price;
      const percentageFrom = (n1: number, n2: number) => (n2 - n1) * (100 / n1);
      const percentual = selectedCoin.firstPrice
        ? percentageFrom(selectedCoin.firstPrice, price)
        : 0;
      state.currencies = {
        ...state.currencies,
        [currencyName]: {
          ...selectedCoin,
          firstPrice,
          percentual,
          currentPrice: price,
        },
      };
      return;
    },
  },
});

export const { updateCurrency } = currencieSlice.actions;
export const selectCurrencies = (state: RootState) => state.currencies;
export default currencieSlice.reducer;
