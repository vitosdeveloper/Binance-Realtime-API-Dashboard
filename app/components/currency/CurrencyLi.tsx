import React, { PropsWithChildren, memo } from 'react';

const CurrencyLi = ({ children }: PropsWithChildren) => {
  return (
    <li className='flex flex-col items-center break-words p-4 sm:p-8 bg-transparent shadow-lg rounded-lg border border-gray-700 hover:shadow-xl transition duration-300 ease-in-out'>
      {children}
    </li>
  );
};

export default memo(CurrencyLi);
