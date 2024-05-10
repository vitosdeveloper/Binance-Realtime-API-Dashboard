'use client';
import Error from './components/text/Error';
import AppContainer from './components/containers/AppContainer';
import Title from './components/text/Title';
import dynamic from 'next/dynamic';
import Currencies from './components/currency/Currencies';
import StoreProvider from './providers/StoreProvider';
import { memo } from 'react';
import Footer from './components/partials/Footer';
import Charts from './components/chart/Charts';

const Home = () => {
  return (
    <AppContainer>
      <Title>Binance Realtime API Dashboard</Title>
      <StoreProvider>
        <div className='flex flex-col gap-4 flex-auto'>
          <Error />
          <Currencies />
          <Charts />
        </div>
      </StoreProvider>
      <Footer />
    </AppContainer>
  );
};

export default memo(Home);
