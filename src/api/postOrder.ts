import axios, { AxiosError } from 'axios';
import { OrderQueryParams, PlaceOrderParams } from './postOrder.types.ts';
import { createUrl, getAxiosHeaderParam, isMsgInResponse } from './utils.ts';

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

    const url = createUrl('/fapi/v1/order', params);
    return axios
        .post(url, undefined, {
            ...getAxiosHeaderParam(),
            signal: controller.signal
        })
        .catch((error: AxiosError) => {
            const responseData = error.response?.data;
            if (isMsgInResponse(responseData)) {
                throw responseData.msg;
            } else {
                throw 'Unknown error';
            }
        });
}
