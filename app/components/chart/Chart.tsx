import { CurrenciesNames } from '@/app/types/Currencies';
import { ApexOptions } from 'apexcharts';
import { memo, useCallback } from 'react';
import ApexCharts from 'react-apexcharts';

type Props = {
  currencySymbol: CurrenciesNames;
  data: {
    x: number;
    y: number[];
  }[];
};

const Chart = ({ data, currencySymbol }: Props) => {
  const options = useCallback(
    () =>
      ({
        chart: {
          type: 'candlestick',
          height: 350,
          background: 'transparent',
          borderWidth: 0,
          toolbar: { show: false },
          memo: true,
        },
        title: {
          text: currencySymbol,
          style: { color: '#ffffff' },
          align: 'center',
        },
        xaxis: {
          type: 'numeric',
          axisBorder: { color: '#444444' },
          labels: { style: { colors: '#cccccc' } },
        },
        yaxis: {
          tooltip: { enabled: true },
          axisBorder: { color: '#444444' },
          labels: { style: { colors: '#cccccc' } },
        },
        fill: { colors: ['#1f1f1f'] },
        theme: {
          mode: 'dark',
          monochrome: { enabled: true, color: '#cccccc' },
          legend: { labels: { colors: '#ffffff' } },
        },
      } as ApexOptions),
    [currencySymbol]
  );

  return (
    <ApexCharts
      options={options()}
      series={[{ data }]}
      type='candlestick'
      height={450}
    />
  );
};

export default memo(Chart);
