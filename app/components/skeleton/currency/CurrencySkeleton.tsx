import { CurrenciesNames } from '@/app/types/Currencies';
import React from 'react';
import { currencyIcons, currencyNames } from '../../currency/Currency';
import Image from 'next/image';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

type Props = {
  currencySymbol: CurrenciesNames;
};

const CurrencySkeleton = ({ currencySymbol }: Props) => {
  return (
    <li className='flex flex-col items-center break-words p-6 pb-4 bg-gray-800 shadow-lg rounded-lg border border-gray-700 hover:shadow-xl transition duration-300 ease-in-out'>
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
      <SkeletonTheme baseColor='#202020' highlightColor='#444'>
        <Skeleton style={{ top: '2px' }} width={150} height={12} />
        <Skeleton style={{ top: '-4px' }} width={180} height={12} />
        <Skeleton style={{ top: '-13px' }} width={160} height={8} />
        <Skeleton style={{ top: '-20px' }} width={140} height={8} />
      </SkeletonTheme>
    </li>
  );
};

export default CurrencySkeleton;
