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
          animations: { enabled: false },
          dataLabels: { enabled: false },
          stroke: {
            width: 2,
            curve: 'straight',
          },
        },
        markers: { size: 0 },
        dataLabels: { enabled: false },
        animations: { enabled: false },
        title: {
          text: currencySymbol,
          style: { color: 'rgb(203, 213, 225)' },
          align: 'center',
          animations: { enabled: false },
        },
        xaxis: {
          type: 'numeric',
          axisBorder: { color: '#444444' },
          labels: { style: { colors: 'rgb(203, 213, 225)' } },
          animations: { enabled: false },
        },
        yaxis: {
          tooltip: { enabled: true },
          axisBorder: { color: '#444444' },
          labels: { style: { colors: 'rgb(203, 213, 225)' } },
          animations: { enabled: false },
        },
        fill: { colors: ['#1f1f1f'] },
        theme: {
          animations: { enabled: false },
          mode: 'dark',
          monochrome: { enabled: true, color: 'rgb(203, 213, 225)' },
          legend: { labels: { colors: 'rgb(203, 213, 225)' } },
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
