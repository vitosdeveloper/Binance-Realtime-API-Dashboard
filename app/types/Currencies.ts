export type CurrenciesNames = 'BTCUSDT' | 'ETHUSDT' | 'SOLUSDT' | 'DOGEUSDT';

export type CurrenciesSlice = {
  currencies: {
    [key in CurrenciesNames]: {
      firstPrice: null | number;
      currentPrice: null | number;
      percentual: null | number;
    };
  };
};

export interface IRawCurrency {
  p: number;
  s: CurrenciesNames;
}
