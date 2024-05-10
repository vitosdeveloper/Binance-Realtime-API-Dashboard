import { ICurrencyForChart } from './ICurrencyForChart';

export const isCurrencyForChart = (
  currencyForChart: unknown
): currencyForChart is ICurrencyForChart => {
  if (
    currencyForChart &&
    typeof currencyForChart === 'object' &&
    'k' in currencyForChart &&
    's' in currencyForChart &&
    currencyForChart.k &&
    currencyForChart.s &&
    typeof currencyForChart.k === 'object' &&
    'o' in currencyForChart.k &&
    'h' in currencyForChart.k &&
    'l' in currencyForChart.k &&
    'c' in currencyForChart.k
  ) {
    return true;
  }
  return false;
};
