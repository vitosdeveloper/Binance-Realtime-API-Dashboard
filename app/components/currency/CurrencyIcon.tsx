import { CurrenciesNames } from '@/app/types/Currencies';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import BTCUSDT_ICON from '@/public/coins/BTCUSDT.svg';
import DOGEUSDT_ICON from '@/public/coins/DOGEUSDT.svg';
import ETHUSDT_ICON from '@/public/coins/ETHUSDT.svg';
import SOLUSDT_ICON from '@/public/coins/SOLUSDT.svg';
import { memo } from 'react';
import ShadowReflectionWrapper from '../fx/ShadowReflectionWrapper';

type Props = { currencySymbol: CurrenciesNames };

export const currencyIcons: { [key in CurrenciesNames]: StaticImport } = {
  BTCUSDT: BTCUSDT_ICON,
  DOGEUSDT: DOGEUSDT_ICON,
  ETHUSDT: ETHUSDT_ICON,
  SOLUSDT: SOLUSDT_ICON,
};

const CurrencyIcon = ({ currencySymbol }: Props) => {
  return (
    <ShadowReflectionWrapper>
      <Image
        className='h-16 w-auto mb-4 m-auto'
        src={currencyIcons[currencySymbol]}
        alt={currencySymbol}
      />
    </ShadowReflectionWrapper>
  );
};

export default memo(CurrencyIcon);
