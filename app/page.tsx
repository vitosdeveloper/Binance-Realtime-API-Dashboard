'use client';
import Error from './components/text/Error';
import AppContainer from './components/containers/AppContainer';
import Title from './components/text/Title';
import dynamic from 'next/dynamic';
import Currencies from './components/currency/Currencies';
import StoreProvider from './providers/StoreProvider';
import { memo } from 'react';
const Charts = dynamic(() => import('./components/chart/Charts'), {
  ssr: false,
});

const Home = () => {
  return (
    <AppContainer>
      <Title>Binance Realtime API Dashboard</Title>
      <StoreProvider>
        <Error />
        <Currencies />
        <Charts />
      </StoreProvider>
    </AppContainer>
  );
};

export default memo(Home);
