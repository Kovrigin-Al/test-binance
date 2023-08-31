import { Loading } from '../Loading/Loading';

type Props = {
    balance?: string;
};
export const Balance = ({ balance }: Props) => {
    if (!balance) {
        return <Loading />;
    }
    return <div>Balance: {parseFloat(balance).toFixed(2)} USDT</div>;
};
