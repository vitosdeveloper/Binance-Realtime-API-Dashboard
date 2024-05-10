export type CurrenciesNames = 'BTCUSDT' | 'ETHUSDT' | 'SOLUSDT' | 'DOGEUSDT';
export interface ICurrency {
  firstPrice: null | number;
  currentPrice: null | number;
  percentual: null | number;
}

export type CurrenciesSlice = {
  currencies: {
    [key in CurrenciesNames]: ICurrency;
  };
};

export interface IRawCurrency {
  w: number;
  s: CurrenciesNames;
}
