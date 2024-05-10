import { useCallback, useEffect } from 'react';
import { useAppDispatch } from '../lib/hooks';
import { updateCurrency } from '../lib/features/currencies/currenciesSlice';
import { isCurrency } from '../types/isCurrency';

const useCurrencies = () => {
  const dispatch = useAppDispatch();

  const startCurrenciesWebSocket = useCallback(() => {
    const ws = new WebSocket(
      'wss://stream.binance.com:9443/stream?streams=btcusdt@aggTrade/ethusdt@aggTrade/solusdt@aggTrade/dogeusdt@aggTrade'
    );
    ws.onerror = (e) => console.error(e);
    // ws.onopen = (e) => {
    //   console.log(e);
    // };
    ws.onmessage = (e) => {
      const { data } = JSON.parse(e.data);
      if (isCurrency(data)) {
        dispatch(
          updateCurrency({ currencyName: data.s, price: Number(data.p) })
        );
      }
      ws.close();
    };
  }, [dispatch]);

  useEffect(() => {
    startCurrenciesWebSocket();
  }, [startCurrenciesWebSocket]);
};

export default useCurrencies;
