'use client';
import { useAppSelector } from './lib/hooks';
import { selectCurrencies } from './lib/features/currencies/currenciesSlice';
import useCurrencies from './custom-hooks/useCurrencies';
import { CurrenciesNames } from './types/Currencies';
import { selectApplicationState } from './lib/features/applicationState/applicationStateSlice';
import Currency from './components/currency/Currency';

export default function Home() {
  useCurrencies();
  const { currencies } = useAppSelector(selectCurrencies);
  // const { applicationState } = useAppSelector(selectApplicationState);

  // if (applicationState.loading) return 'loading';
  return (
    <main className='m-auto'>
      <ul className='grid grid-cols-1 items-start sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 p-8'>
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
    </main>
  );
}
