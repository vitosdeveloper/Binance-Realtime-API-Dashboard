import { useCallback, useEffect } from 'react';
import { useAppDispatch } from '../lib/hooks';
import { updateCurrency } from '../lib/features/currencies/currenciesSlice';
import { isCurrency } from '../types/isCurrency';
import {
  errorAction,
  loading,
  success,
} from '../lib/features/applicationState/applicationStateSlice';

const useCurrencies = () => {
  const dispatch = useAppDispatch();

  const startCurrenciesWebSocket = useCallback(() => {
    try {
      dispatch(loading());
      const ws = new WebSocket(
        'wss://stream.binance.com:9443/stream?streams=btcusdt@aggTrade/ethusdt@aggTrade/solusdt@aggTrade/dogeusdt@aggTrade'
      );
      ws.onerror = (e) => {
        throw new Error(
          'There was an error while connecting to the API, trying to reconnect'
        );
      };
      // ws.onopen = (e) => {
      //   console.log(e);
      // };
      ws.onmessage = (e) => {
        const { data } = JSON.parse(e.data);
        if (isCurrency(data)) {
          dispatch(success());
          dispatch(
            updateCurrency({ currencyName: data.s, price: Number(data.p) })
          );
        }
        // ws.close();
      };
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : 'There was an error while connecting to the API, trying to reconnect.';
      dispatch(errorAction({ errorMessage }));
    }
  }, [dispatch]);

  useEffect(() => {
    startCurrenciesWebSocket();
  }, [startCurrenciesWebSocket]);
};

export default useCurrencies;
