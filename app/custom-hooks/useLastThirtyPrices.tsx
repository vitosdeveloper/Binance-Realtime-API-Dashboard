import { useCallback, useEffect } from 'react';
import { useAppDispatch } from '../lib/hooks';
import {
  errorAction,
  loading,
  success,
} from '../lib/features/applicationState/applicationStateSlice';
import { changeCurrencyLastThirtyPrices } from '../lib/features/currencies/currenciesChartsSlice';
import { isCurrencyForChart } from '../types/isCurrencyForChart';

const useLastThirtyPrices = () => {
  const dispatch = useAppDispatch();

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
      dispatch(loading());
      const ws = new WebSocket(
        'wss://stream.binance.com:9443/stream?streams=btcusdt@kline_1m/ethusdt@kline_1m/solusdt@kline_1m/dogeusdt@kline_1m'
      );
      ws.onmessage = (e) => {
        const { data } = JSON.parse(e.data);
        if (isCurrencyForChart(data)) {
          dispatch(success());
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
    getLastThirtyPrices();
  }, [getLastThirtyPrices]);
};

export default useLastThirtyPrices;
