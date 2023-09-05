import { useCallback, useEffect, useState } from 'react';

import { BinanceWS } from '../ws';
import { isTickerResponse } from '../utils/isTickerResponse';
import { isKlineResponse } from '../utils/isKlineResponse';
import { KlineResponse, TickerResponse } from '../types/ws';

const baseURL = import.meta.env.VITE_WS_BASE_URL;

export const useWebSocket = (url = 'bnbusdt@ticker') => {
    const [tickerData, setTickerData] = useState<TickerResponse>();
    const [klineData, setKlineData] = useState<KlineResponse>();

    const onMessage = useCallback(({ data }: any) => {
        if (typeof data === 'string') {
            const response = JSON.parse(data);
            //skips the first message confirming connection
            if ('result' in response && response.result === null) {
                return;
            }
            if (isTickerResponse(response)) {
                setTickerData(response);
            }
            if (isKlineResponse(response)) {
                setKlineData(response);
            }
        }
    }, []);

    useEffect(() => {
        const binanceWs = new BinanceWS([baseURL, url].join(''), onMessage);
        return () => binanceWs?.closeConnection(onMessage);
    }, []);

    return {
        tickerData,
        klineData
    };
};
