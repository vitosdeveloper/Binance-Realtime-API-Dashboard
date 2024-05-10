import React, { PropsWithChildren, memo } from 'react';

const AppContainer = ({ children }: PropsWithChildren) => {
  return (
    <main className='m-auto flex flex-col gap-8 p-2 sm:p-8 justify-center'>
      {children}
    </main>
  );
};

export default memo(AppContainer);
