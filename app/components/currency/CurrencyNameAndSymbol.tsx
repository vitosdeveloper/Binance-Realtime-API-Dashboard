import { CurrenciesNames } from '@/app/types/Currencies';
import React, { memo } from 'react';

type Props = { currencySymbol: CurrenciesNames };

export const currencyNames: { [key in CurrenciesNames]: string } = {
  BTCUSDT: 'Bitcoin',
  DOGEUSDT: 'Dogecoin',
  ETHUSDT: 'Ethereum',
  SOLUSDT: 'Solana',
};

const CurrencyNameAndSymbol = ({ currencySymbol }: Props) => {
  return (
    <>
      <h3 className='m-auto text-2xl font-semibold text-gray-200'>
        {currencyNames[currencySymbol]}
      </h3>
      <small className='m-auto font-semibold text-gray-200 mb-4'>
        {currencySymbol}
      </small>
    </>
  );
};

export default memo(CurrencyNameAndSymbol);
