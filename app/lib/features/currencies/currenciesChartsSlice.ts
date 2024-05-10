import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import {
  CurrenciesNames,
  ICandlestick,
  ILastThirtyPrices,
} from '@/app/types/Currencies';

const initialState: ILastThirtyPrices = {
  currenciesForChart: {
    BTCUSDT: [],
    ETHUSDT: [],
    SOLUSDT: [],
    DOGEUSDT: [],
  },
};

export const currenciesChartsSlice = createSlice({
  name: 'currenciesChartsSlice',
  initialState,
  reducers: {
    changeCurrencyLastThirtyPrices: (
      state,
      action: PayloadAction<{
        currencyName: CurrenciesNames;
        candleStickObject: ICandlestick;
      }>
    ) => {
      const { candleStickObject, currencyName } = action.payload;
      const selectedCoinArr = state.currenciesForChart[currencyName];

      if (!selectedCoinArr.length) {
        state.currenciesForChart = {
          ...state.currenciesForChart,
          [currencyName]: Array(60).fill(candleStickObject),
        };
        return;
      }

      state.currenciesForChart = {
        ...state.currenciesForChart,
        [currencyName]: [...selectedCoinArr.slice(1), candleStickObject],
      };
    },
  },
});

export const { changeCurrencyLastThirtyPrices } = currenciesChartsSlice.actions;
export const selectCurrencies = (state: RootState) => state.currenciesCharts;
export default currenciesChartsSlice.reducer;
