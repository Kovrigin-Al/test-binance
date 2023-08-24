import { useCallback, useEffect, useState } from 'react';
import { StreamResponse } from '../types/ws';
import { isStreamResponse } from '../utils/isStreamResponse';
import { BinanceWS } from '../ws';

const baseURL = import.meta.env.VITE_WS_BASE_URL;

export const useWebSocket = (url: string) => {
    const [data, setData] = useState<StreamResponse>();
    const onMessage = useCallback(({ data }: any) => {
        if (typeof data === 'string') {
            const response = JSON.parse(data);
            if (isStreamResponse(response)) {
                setData(response);
            }
        }
    }, []);

    useEffect(() => {
        const binanceWs = new BinanceWS([baseURL, url].join(''), onMessage);
        return () => binanceWs.closeConnection(onMessage);
    }, []);

    return data;
};
