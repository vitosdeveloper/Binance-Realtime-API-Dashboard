import { CurrenciesNames } from '@/app/types/Currencies';
import React, { memo } from 'react';
import Image from 'next/image';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import CurrencyIcon, { currencyIcons } from '../../currency/CurrencyIcon';
import { currencyNames } from '../../currency/CurrencyNameAndSymbol';
import CurrencyLi from '../../currency/CurrencyLi';
import ShadowReflectionWrapper from '../../fx/ShadowReflectionWrapper';

type Props = {
  currencySymbol: CurrenciesNames;
};

const CurrencySkeleton = ({ currencySymbol }: Props) => {
  return (
    <ShadowReflectionWrapper>
      <li
        className={`flex flex-col items-center break-words p-6 sm:p-3 sm:pt-8 bg-gray-950 
      shadow-lg rounded-lg border border-gray-700 hover:shadow-xl transition duration-300 ease-in-out`}
      >
        <CurrencyIcon currencySymbol={currencySymbol} />
        <h3 className='m-auto text-2xl font-semibold text-gray-200'>
          {currencyNames[currencySymbol]}
        </h3>
        <small className='m-auto font-semibold text-gray-200 mb-4'>
          {currencySymbol}
        </small>
        <SkeletonTheme baseColor='#202020' highlightColor='#444'>
          <Skeleton style={{ top: '-4px' }} width={137} height={8} />
          <Skeleton style={{ top: '-10px' }} width={157} height={8} />
          <Skeleton style={{ top: '-17px' }} width={146} height={8} />
          <Skeleton style={{ top: '-25px' }} width={142} height={8} />
        </SkeletonTheme>
      </li>
    </ShadowReflectionWrapper>
  );
};

export default memo(CurrencySkeleton);
