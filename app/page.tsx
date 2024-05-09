'use client';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './lib/hooks';
import {
  Currencies,
  selectCurrencies,
  updateCurrency,
} from './lib/features/currencies/currenciesSlice';
import useCurrencies from './custom-hooks/useCurrencies';

export default function Home() {
  const { currencies } = useAppSelector(selectCurrencies);

  useCurrencies();

  return (
    <div>
      <ul>
        {Object.keys(currencies).map((currencySymbol) => {
          const currentCurrency = currencies[currencySymbol as Currencies];
          const { fp, cp, p } = currentCurrency;
          if (fp)
            return (
              <li key={currencySymbol} className='mb-4'>
                <p>{currencySymbol}</p>
                <p>First price: {fp}</p>
                <p>Current Price: {cp}</p>
                <p>
                  Percentage:{' '}
                  <span
                    className={`${
                      p && p < 0 ? 'text-red-500' : 'text-green-500'
                    }`}
                  >
                    {p}%
                  </span>
                </p>
              </li>
            );
        })}
      </ul>
    </div>
  );
}
