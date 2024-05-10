import { IRawCurrency } from './Currencies';

export const isCurrency = (currency: unknown): currency is IRawCurrency => {
  if (
    !currency ||
    typeof currency !== 'object' ||
    !('w' in currency) ||
    !('s' in currency) ||
    !currency.w ||
    !currency.s ||
    (currency.s != 'BTCUSDT' &&
      currency.s != 'ETHUSDT' &&
      currency.s != 'SOLUSDT' &&
      currency.s != 'DOGEUSDT')
  ) {
    return false;
  }
  return true;
};
