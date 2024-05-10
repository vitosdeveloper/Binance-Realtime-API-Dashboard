import React, { PropsWithChildren } from 'react';

const CurrencyLi = ({ children }: PropsWithChildren) => {
  return (
    <li className='flex flex-col items-center break-words p-6 bg-gray-800 shadow-lg rounded-lg border border-gray-700 hover:shadow-xl transition duration-300 ease-in-out'>
      {children}
    </li>
  );
};

export default CurrencyLi;
