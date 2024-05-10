import useLastThirtyPrices from '@/app/custom-hooks/useLastThirtyPrices';
import { useAppSelector } from '@/app/lib/hooks';
import { CurrenciesNames } from '@/app/types/Currencies';
import { memo } from 'react';
import { selectCurrencies } from '@/app/lib/features/currencies/currenciesChartsSlice';
import Chart from './Chart';
import ChartSkeleton from '../skeleton/chart/ChartSkeleton';

const Charts = () => {
  useLastThirtyPrices();
  const { currenciesForChart } = useAppSelector(selectCurrencies);

  return Object.keys(currenciesForChart).map((currencySymbol) => {
    const selectedCurrency =
      currenciesForChart[currencySymbol as CurrenciesNames];

    const data = selectedCurrency.map((lastPrice, i) => {
      return {
        x: i,
        y: [lastPrice.open, lastPrice.high, lastPrice.low, lastPrice.close],
      };
    });

    if (!selectedCurrency.length) return <ChartSkeleton key={currencySymbol} />;
    return (
      <Chart
        key={currencySymbol}
        currencySymbol={currencySymbol as CurrenciesNames}
        data={data.reverse()}
      />
    );
  });
};

export default memo(Charts);
