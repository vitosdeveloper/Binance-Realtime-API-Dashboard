import { useCallback, useEffect } from 'react';
import { useAppDispatch } from '../lib/hooks';
import {
  errorAction,
  loading,
  success,
} from '../lib/features/applicationState/applicationStateSlice';
import { isCurrencyForChart } from '../types/isCurrencyForChart';
import { changeCurrencyLastThirtyPrices } from '../lib/features/currencies/currenciesChartsSlice';
import { updateCurrency } from '../lib/features/currencies/currenciesSlice';
import { isCurrency } from '../types/isCurrency';

const useWebSockets = (customHook: string) => {
  const dispatch = useAppDispatch();
  const isUseCurrencies = customHook === 'useCurrencies';

  const getLastThirtyPrices = useCallback(() => {
    const showError = () => {
      dispatch(
        errorAction({
          errorMessage:
            'There was an error while connecting to the API, trying to reconnect.',
        })
      );
      getLastThirtyPrices();
    };
    try {
      // dispatch(loading());
      const ws = new WebSocket(
        isUseCurrencies
          ? 'wss://stream.binance.com:9443/stream?streams=btcusdt@avgPrice/ethusdt@avgPrice/solusdt@avgPrice/dogeusdt@avgPrice'
          : 'wss://stream.binance.com:9443/stream?streams=btcusdt@kline_1m/ethusdt@kline_1m/solusdt@kline_1m/dogeusdt@kline_1m'
      );
      ws.onopen = () => dispatch(success());
      ws.onmessage = (e) => {
        const { data } = JSON.parse(e.data);
        if (isUseCurrencies && isCurrency(data)) {
          dispatch(
            updateCurrency({ currencyName: data.s, price: Number(data.w) })
          );
          return;
        } else if (!isUseCurrencies && isCurrencyForChart(data))
          dispatch(
            changeCurrencyLastThirtyPrices({
              candleStickObject: {
                open: Number(data.k.o),
                high: Number(data.k.h),
                low: Number(data.k.l),
                close: Number(data.k.c),
              },
              currencyName: data.s,
            })
          );
      };
      ws.onerror = (e) => {
        ws.close();
        showError();
      };
    } catch (error) {
      showError();
    }
  }, [dispatch, isUseCurrencies]);

  useEffect(() => {
    getLastThirtyPrices();
  }, [getLastThirtyPrices]);
};

export default useWebSockets;
