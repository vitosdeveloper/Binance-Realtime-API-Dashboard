import React, { memo } from 'react';
import Currency from './Currency';
import {
  currencyNames,
  selectCurrencies,
} from '@/app/lib/features/currencies/currenciesSlice';
import { useAppSelector } from '@/app/lib/hooks';
import { CurrenciesNames } from '@/app/types/Currencies';
import useCurrencies from '@/app/custom-hooks/useCurrencies';

const Currencies = () => {
  useCurrencies();

  return (
    <ul className='grid grid-cols-1 items-start sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8'>
      {currencyNames.map((currencySymbol) => {
        return (
          <Currency
            key={currencySymbol}
            currencySymbol={currencySymbol as CurrenciesNames}
          />
        );
      })}
    </ul>
  );
};

export default memo(Currencies);
