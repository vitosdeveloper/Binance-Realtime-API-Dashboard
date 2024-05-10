import React, { PropsWithChildren } from 'react';

const Title = ({ children }: PropsWithChildren) => {
  return (
    <h1 className='text-4xl font-bold text-white mb-6 text-center'>
      {children}
    </h1>
  );
};

export default Title;
