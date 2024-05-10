import React, { PropsWithChildren, memo } from 'react';
import ShadowReflectionWrapper from '../fx/ShadowReflectionWrapper';

const CurrencyLi = ({
  children,
  customPadding,
}: PropsWithChildren<{ customPadding?: boolean }>) => {
  return (
    <ShadowReflectionWrapper>
      <li
        className={`flex flex-col items-center break-words p-8 sm:p-8 bg-gray-950 
      shadow-lg rounded-lg border border-gray-700 hover:shadow-xl transition duration-300 ease-in-out`}
      >
        {children}
      </li>
    </ShadowReflectionWrapper>
  );
};

export default memo(CurrencyLi);
