import { useAppSelector } from '@/app/lib/hooks';
import { CurrenciesNames, ICandlestick } from '@/app/types/Currencies';
import { memo, useCallback } from 'react';
import { selectCurrencies } from '@/app/lib/features/currencies/currenciesChartsSlice';
import Chart from './Chart';
import ChartSkeleton from '../skeleton/chart/ChartSkeleton';
import useLastPrices from '@/app/custom-hooks/useLastPrices';

const Charts = () => {
  useLastPrices();
  const { currenciesForChart } = useAppSelector(selectCurrencies);

  const transformData = useCallback((selectedCurrency: ICandlestick[]) => {
    return selectedCurrency.map((lastPrice, i) => {
      return {
        x: i,
        y: [lastPrice.open, lastPrice.high, lastPrice.low, lastPrice.close],
      };
    });
  }, []);

  return Object.keys(currenciesForChart).map((currencySymbol) => {
    const selectedCurrency =
      currenciesForChart[currencySymbol as CurrenciesNames];

    if (!selectedCurrency.length) return <ChartSkeleton key={currencySymbol} />;
    return (
      <Chart
        key={currencySymbol}
        currencySymbol={currencySymbol as CurrenciesNames}
        data={transformData(selectedCurrency)}
      />
    );
  });
};

export default memo(Charts);
