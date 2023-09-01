import axios from 'axios';
import { createUrl, getAxiosHeaderParam } from './utils';

type PositionResponse = {
    breakEvenPrice: string;
    entryPrice: string;
    isAutoAddMargin: string;
    isolatedMargin: string;
    isolatedWallet: string;
    leverage: string;
    liquidationPrice: string;
    marginType: string;
    markPrice: string;
    maxNotionalValue: string;
    notional: string;
    positionAmt: string;
    positionSide: string;
    symbol: string;
    unRealizedProfit: string;
    updateTime: number;
};

export type Position = Pick<
    PositionResponse,
    'entryPrice' | 'markPrice' | 'symbol' | 'positionAmt'
>;

export const getPositions = () => {
    const params = {
        timestamp: Date.now()
    };
    const url = createUrl('/fapi/v2/positionRisk', params);
    return axios
        .get<PositionResponse[]>(url, getAxiosHeaderParam())
        .then(({ data }) =>
            data
                .filter((i) => +i.entryPrice > 0)
                .map(
                    ({ symbol, entryPrice, markPrice, positionAmt }) =>
                        <Position>{ symbol, entryPrice, markPrice, positionAmt }
                )
        );
};
