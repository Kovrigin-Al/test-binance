import axios from 'axios';
import { createUrl, getAxiosHeaderParam } from './utils';
import { UTCTimestamp } from 'lightweight-charts';
import { Point } from '../components/Widgets/Chart/useChart';

type CharDataResponse = [
    number, // Open time
    string, // Open
    string, // High
    string, // Low
    string, // Close
    string, // Volume
    number, // Close time
    string, // Quote asset volume
    number, // Number of trades
    string, // Taker buy base asset volume
    string, // Taker buy quote asset volume
    string // Ignore.
];

export const getChartData = (symbol = 'BNBUSDT', interval = '1m') => {
    const params = {
        timestamp: Date.now(),
        symbol,
        interval,
        limit: 299
    };
    const url = createUrl('/fapi/v1/klines', params);
    return axios
        .get<CharDataResponse[]>(url, getAxiosHeaderParam())
        .then(({ data }) =>
            data.map(
                (i) =>
                    <Point>{
                        time: (i[6] / 1000) as UTCTimestamp,
                        value: +i[4]
                    }
            )
        )
        .catch((error) => {
            console.error('Fetching cart data error: ', error);
            throw error;
        });
};
