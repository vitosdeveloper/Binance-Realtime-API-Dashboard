import React, { PropsWithChildren, memo } from 'react';

const AppContainer = ({ children }: PropsWithChildren) => {
  return (
    <main className='m-auto flex flex-col gap-8 justify-center p-8'>
      {children}
    </main>
  );
};

export default memo(AppContainer);
