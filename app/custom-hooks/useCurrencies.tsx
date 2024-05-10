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
    const showError = () => {
      dispatch(
        errorAction({
          errorMessage:
            'There was an error while connecting to the API, trying to reconnect.',
        })
      );
      startCurrenciesWebSocket();
    };
    try {
      dispatch(loading());
      const ws = new WebSocket(
        'wss://stream.binance.com:9443/stream?streams=btcusdt@avgPrice/ethusdt@avgPrice/solusdt@avgPrice/dogeusdt@avgPrice'
      );
      ws.onmessage = (e) => {
        const { data } = JSON.parse(e.data);
        if (isCurrency(data)) {
          dispatch(success());
          dispatch(
            updateCurrency({ currencyName: data.s, price: Number(data.w) })
          );
        }
      };
      ws.onerror = (e) => {
        ws.close();
        showError();
      };
    } catch (error) {
      showError();
    }
  }, [dispatch]);

  useEffect(() => {
    startCurrenciesWebSocket();
  }, [startCurrenciesWebSocket]);
};

export default useCurrencies;
