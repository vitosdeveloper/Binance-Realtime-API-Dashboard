'use client';
import { useAppSelector } from './lib/hooks';
import { selectCurrencies } from './lib/features/currencies/currenciesSlice';
import useCurrencies from './custom-hooks/useCurrencies';
import { CurrenciesNames } from './types/Currencies';

export default function Home() {
  useCurrencies();
  const { currencies } = useAppSelector(selectCurrencies);

  return (
    <div>
      <ul>
        {Object.keys(currencies).map((currencySymbol) => {
          const currentCurrency = currencies[currencySymbol as CurrenciesNames];
          const { firstPrice, currentPrice, percentual } = currentCurrency;
          if (firstPrice)
            return (
              <li key={currencySymbol} className='mb-4'>
                <p>{currencySymbol}</p>
                <p>First price: {firstPrice}</p>
                <p>Current Price: {currentPrice}</p>
                <p>
                  Percentage:
                  <span
                    className={`${
                      percentual && percentual < 0
                        ? 'text-red-500'
                        : 'text-green-500'
                    }`}
                  >
                    {percentual}%
                  </span>
                </p>
              </li>
            );
        })}
      </ul>
    </div>
  );
}
