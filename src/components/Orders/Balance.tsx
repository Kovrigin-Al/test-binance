import { memo } from 'react';
import { parseStringToFixed } from '../../utils/parseStringToFixed';
import { Loading } from '../Loading/Loading';

type Props = {
    balance?: string;
};
export const Balance = memo(({ balance }: Props) => {
    if (!balance) {
        return <Loading />;
    }
    return <div>Balance: {parseStringToFixed(balance)} USDT</div>;
});
