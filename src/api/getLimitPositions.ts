import axios from 'axios';
import { createUrl, getAxiosHeaderParam } from './utils';

type PositionResponse = {
    orderId: 431039236;
    symbol: string;
    status: string;
    clientOrderId: string;
    price: string;
    avgPrice: string;
    origQty: string;
    executedQty: string;
    cumQuote: string;
    timeInForce: string;
    type: string;
    reduceOnly: boolean;
    closePosition: boolean;
    side: 'SELL' | 'BUY';
    positionSide: string;
    stopPrice: string;
    workingType: string;
    priceProtect: boolean;
    origType: string;
    priceMatch: string;
    selfTradePreventionMode: string;
    goodTillDate: number;
    time: number;
    updateTime: number;
};

export type LimitPosition = Pick<
    PositionResponse,
    'symbol' | 'price' | 'origQty' | 'executedQty' | 'type' | 'side' | 'time'
>;

export const getLimitPositions = () => {
    const params = {
        symbol: 'bnbusdt',
        timestamp: Date.now()
    };
    const url = createUrl('/fapi/v1/openOrders', params);

    return axios
        .get<PositionResponse[]>(url, getAxiosHeaderParam())
        .then(({ data }) =>
            data.map(
                ({ symbol, executedQty, origQty, price, side, time, type }) =>
                    <LimitPosition>{
                        symbol,
                        executedQty,
                        origQty,
                        price,
                        side,
                        time,
                        type
                    }
            )
        );
};
