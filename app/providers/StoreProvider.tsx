'use client';
import React, { ReactNode, useRef } from 'react';
import { AppStore, makeStore } from '../lib/store';
import { Provider } from 'react-redux';

const StoreProvider = ({ children }: { children: ReactNode }) => {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }
  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;
