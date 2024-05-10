import React, { PropsWithChildren, memo } from 'react';

const AppContainer = ({ children }: PropsWithChildren) => {
  return (
    <main className='m-auto min-h-screen flex flex-col gap-8 p-2 sm:p-8'>
      <>{children}</>
    </main>
  );
};

export default memo(AppContainer);
