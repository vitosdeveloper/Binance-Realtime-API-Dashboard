'use client';
import { CurrenciesNames, ICurrency } from '@/app/types/Currencies';
import BTCUSDT_ICON from '@/public/coins/BTCUSDT.svg';
import DOGEUSDT_ICON from '@/public/coins/DOGEUSDT.svg';
import ETHUSDT_ICON from '@/public/coins/ETHUSDT.svg';
import SOLUSDT_ICON from '@/public/coins/SOLUSDT.svg';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import CurrencySkeleton from '../skeleton/currency/CurrencySkeleton';
import { formatNumberWithMaxDecimals } from '@/app/utils/formatNumberWithMaxDecimals';
import { memo } from 'react';
import CurrencyLi from './CurrencyLi';

type Props = {
  currentCurrency: ICurrency;
  currencySymbol: CurrenciesNames;
};

export const currencyNames: { [key in CurrenciesNames]: string } = {
  BTCUSDT: 'Bitcoin',
  DOGEUSDT: 'Dogecoin',
  ETHUSDT: 'Ethereum',
  SOLUSDT: 'Solana',
};

export const currencyIcons: { [key in CurrenciesNames]: StaticImport } = {
  BTCUSDT: BTCUSDT_ICON,
  DOGEUSDT: DOGEUSDT_ICON,
  ETHUSDT: ETHUSDT_ICON,
  SOLUSDT: SOLUSDT_ICON,
};

const Currency = ({ currentCurrency, currencySymbol }: Props) => {
  const { firstPrice, currentPrice, percentual } = currentCurrency;
  const greenOrRed =
    percentual && percentual < 0 ? 'text-red-500' : 'text-green-500';

  if (!firstPrice || !currentPrice)
    return <CurrencySkeleton currencySymbol={currencySymbol} />;
  return (
    <CurrencyLi>
      <Image
        className='h-16 w-auto mb-4 m-auto'
        src={currencyIcons[currencySymbol]}
        alt={currencySymbol}
      />
      <h3 className='m-auto text-2xl font-semibold text-gray-200'>
        {currencyNames[currencySymbol]}
      </h3>
      <small className='m-auto font-semibold text-gray-200 mb-4'>
        {currencySymbol}
      </small>
      <p className='text-gray-400'>
        First: <strong>{firstPrice}</strong>
      </p>
      <p className='text-gray-400'>
        Average:{' '}
        <span className={`${greenOrRed} font-semibold`}>{currentPrice} </span>
      </p>
      <small className='text-gray-400'>
        <span className={`${greenOrRed} font-semibold`}>
          {formatNumberWithMaxDecimals(percentual as number, 16)}%
        </span>
      </small>
      <small className='text-gray-400'>
        <span className={`${greenOrRed} font-semibold`}>
          {formatNumberWithMaxDecimals(currentPrice - firstPrice, 16)}
        </span>
      </small>
    </CurrencyLi>
  );
};

export default memo(Currency);
