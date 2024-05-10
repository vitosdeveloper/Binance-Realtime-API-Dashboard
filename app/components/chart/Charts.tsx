import { useAppSelector } from '@/app/lib/hooks';
import { CurrenciesNames, ICandlestick } from '@/app/types/Currencies';
import { memo, useCallback, useState } from 'react';
import { selectCurrencies } from '@/app/lib/features/currencies/currenciesChartsSlice';
import ChartSkeleton from '../skeleton/chart/ChartSkeleton';
import useLastPrices from '@/app/custom-hooks/useLastPrices';
import dynamic from 'next/dynamic';
import ShowChartsButton from '../form/button/ShowChartsButton';
const Chart = dynamic(() => import('./Chart'), {
  ssr: false,
});

const Charts = () => {
  useLastPrices();
  const [showCharts, setShowCharts] = useState<boolean>(false);
  const { currenciesForChart } = useAppSelector(selectCurrencies);

  const transformData = useCallback((selectedCurrency: ICandlestick[]) => {
    return selectedCurrency.map((lastPrice, i) => {
      return {
        x: i,
        y: [lastPrice.open, lastPrice.high, lastPrice.low, lastPrice.close],
      };
    });
  }, []);

  if (!showCharts)
    return (
      <ShowChartsButton onClick={() => setShowCharts(true)}>
        Show Charts
      </ShowChartsButton>
    );

  return (
    <>
      <ShowChartsButton onClick={() => setShowCharts(false)}>
        Hide Charts
      </ShowChartsButton>
      {Object.keys(currenciesForChart).map((currencySymbol) => {
        const selectedCurrency =
          currenciesForChart[currencySymbol as CurrenciesNames];
        if (!selectedCurrency.length)
          return <ChartSkeleton key={currencySymbol} />;
        return (
          <Chart
            key={currencySymbol}
            currencySymbol={currencySymbol as CurrenciesNames}
            data={transformData(selectedCurrency)}
          />
        );
      })}
    </>
  );
};

export default memo(Charts);
