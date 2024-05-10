'use client';
import { CurrenciesNames, ICurrency } from '@/app/types/Currencies';
import BTCUSDT_ICON from '@/public/coins/BTCUSDT.svg';
import DOGEUSDT_ICON from '@/public/coins/DOGEUSDT.svg';
import ETHUSDT_ICON from '@/public/coins/ETHUSDT.svg';
import SOLUSDT_ICON from '@/public/coins/SOLUSDT.svg';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import CurrencySkeleton from '../skeleton/currency/CurrencySkeleton';

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
    <li className='flex flex-col items-center break-words p-6 bg-gray-800 shadow-lg rounded-lg border border-gray-700 hover:shadow-xl transition duration-300 ease-in-out'>
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
      <p className='text-gray-400'>First Price: {firstPrice}</p>
      <p className='text-gray-400'>
        Current Price:{' '}
        <span className={`${greenOrRed} font-semibold`}>{currentPrice} </span>
      </p>
      <small className='text-gray-400'>
        <span className={`${greenOrRed} font-semibold text-xs`}>
          {percentual}%
        </span>
      </small>
      <small className='text-gray-400'>
        <span className={`${greenOrRed} font-semibold`}>
          {currentPrice - firstPrice}
        </span>
      </small>
    </li>
  );
};

export default Currency;
