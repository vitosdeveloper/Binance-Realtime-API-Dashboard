'use client';
import useCurrencies from './custom-hooks/useCurrencies';
import Error from './components/text/Error';
import Currencies from './components/currency/Currencies';
import AppContainer from './components/containers/AppContainer';
import Title from './components/text/Title';

export default function Home() {
  useCurrencies();

  return (
    <AppContainer>
      <Title>Binance Realtime API Dashboard</Title>
      <Error />
      <Currencies />
    </AppContainer>
  );
}
