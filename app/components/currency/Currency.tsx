'use client';
import { CurrenciesNames } from '@/app/types/Currencies';
import CurrencySkeleton from '../skeleton/currency/CurrencySkeleton';
import { formatNumberWithMaxDecimals } from '@/app/utils/formatNumberWithMaxDecimals';
import { memo } from 'react';
import CurrencyLi from './CurrencyLi';
import { selectCurrencies } from '@/app/lib/features/currencies/currenciesSlice';
import { useAppSelector } from '@/app/lib/hooks';
import CurrencyIcon from './CurrencyIcon';
import CurrencyNameAndSymbol from './CurrencyNameAndSymbol';

type Props = {
  currencySymbol: CurrenciesNames;
};

const Currency = ({ currencySymbol }: Props) => {
  const { currencies } = useAppSelector(selectCurrencies);
  const currentCurrency = currencies[currencySymbol as CurrenciesNames];
  const { firstPrice, currentPrice, percentual } = currentCurrency;
  const greenOrRed =
    percentual && percentual < 0 ? 'text-red-500' : 'text-green-500';

  if (!firstPrice || !currentPrice)
    return <CurrencySkeleton currencySymbol={currencySymbol} />;
  return (
    <CurrencyLi>
      <CurrencyIcon currencySymbol={currencySymbol} />
      <CurrencyNameAndSymbol currencySymbol={currencySymbol} />
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
