import React, { PropsWithChildren, memo } from 'react';

const Title = ({ children }: PropsWithChildren) => {
  return (
    <h1 className='text-3xl sm:text-5xl font-sans font-bold text-slate-300 mb-6 text-center'>
      {children}
    </h1>
  );
};

export default memo(Title);
