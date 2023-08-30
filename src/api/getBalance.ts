import axios from 'axios';
import { createUrl, getAxiosHeaderParam } from './utils';

interface BalanceResponse {
    accountAlias: string;
    asset: string;
    balance: string;
    crossWalletBalance: string;
    crossUnPnl: string;
    availableBalance: string;
    maxWithdrawAmount: string;
    marginAvailable: boolean;
    updateTime: number;
}

export const getBalance = (asset: string = 'USDT') => {
    const params = {
        timestamp: Date.now()
    };
    const url = createUrl('/fapi/v2/balance', params);
    return axios
        .get<BalanceResponse[]>(url, getAxiosHeaderParam())
        .then(({ data }) => data.filter((i) => i.asset === asset)[0].balance)
        .catch((error) => {
            console.error('Fetching balance error: ', error);
            throw error;
        });
};
