import axios, { AxiosError } from 'axios';
import CryptoJS from 'crypto-js';
import { OrderQueryParams, PlaceOrderParams } from './postOrder.types.ts';

const apiKey = import.meta.env.VITE_API_KEY;
const apiSecret = import.meta.env.VITE_API_SECRET;
const endpoint = import.meta.env.VITE_REST_BASE_URL + '/fapi/v1/order';

export function placeOrder({
    type,
    price,
    quantity,
    side,
    symbol,
    controller
}: PlaceOrderParams & { controller: AbortController }) {
    const params: OrderQueryParams = {
        symbol,
        side,
        type,
        timeInForce: type === 'LIMIT' ? 'GTC' : undefined,
        quantity,
        price,
        recvWindow: 5000,
        timestamp: Date.now()
    };

    const queryString = Object.keys(params)
        .map((key) => {
            const value = params[key as keyof typeof params];
            if (value) {
                return `${key}=${value}`;
            }
        })
        .join('&');

    const signature = CryptoJS.HmacSHA256(queryString, apiSecret).toString();
    const url = `${endpoint}?${queryString}&signature=${signature}`;

    return axios
        .post(url, undefined, {
            headers: { 'X-MBX-APIKEY': apiKey },
            signal: controller.signal
        })
        .catch((error: AxiosError) => {
            const responseData = error.response?.data;
            if (
                typeof responseData === 'object' &&
                responseData !== null &&
                'msg' in responseData
            ) {
                throw responseData.msg;
            } else {
                throw 'Unknown error';
            }
        });
}
