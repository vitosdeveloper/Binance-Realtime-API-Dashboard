export type CurrenciesNames = 'BTCUSDT' | 'ETHUSDT' | 'SOLUSDT' | 'DOGEUSDT';

export interface ICandlestick {
  open: number;
  high: number;
  low: number;
  close: number;
}

export interface ICurrency {
  firstPrice: null | number;
  currentPrice: null | number;
  percentual: null | number;
}

export interface ILastThirtyPrices {
  currenciesForChart: { [key in CurrenciesNames]: ICandlestick[] };
}

export type CurrenciesSlice = {
  currencies: { [key in CurrenciesNames]: ICurrency };
};

export interface IRawCurrency {
  w: number;
  s: CurrenciesNames;
}
