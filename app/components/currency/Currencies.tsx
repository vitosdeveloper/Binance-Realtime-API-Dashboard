import React from 'react';
import Currency from './Currency';
import { selectCurrencies } from '@/app/lib/features/currencies/currenciesSlice';
import { useAppSelector } from '@/app/lib/hooks';
import { CurrenciesNames } from '@/app/types/Currencies';

type Props = {};

const Currencies = (props: Props) => {
  const { currencies } = useAppSelector(selectCurrencies);

  return (
    <ul className='grid grid-cols-1 items-start sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8'>
      {Object.keys(currencies).map((currencySymbol) => {
        const currentCurrency = currencies[currencySymbol as CurrenciesNames];
        return (
          <Currency
            key={currencySymbol}
            currentCurrency={currentCurrency}
            currencySymbol={currencySymbol as CurrenciesNames}
          />
        );
      })}
    </ul>
  );
};

export default Currencies;
