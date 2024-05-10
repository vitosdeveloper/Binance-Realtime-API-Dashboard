import { CurrenciesNames } from './Currencies';

export interface ICurrencyForChart {
  s: CurrenciesNames;
  k: {
    o: string;
    h: string;
    l: string;
    c: string;
  };
}
