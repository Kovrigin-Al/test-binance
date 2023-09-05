import { twMerge } from 'tailwind-merge';

import { LimitPosition } from '../../../api/getLimitPositions';
import { parseStringToFixed } from '../../../utils/parseStringToFixed';

type Props = {
    position: LimitPosition;
};

export const LimitPositionRow = ({ position }: Props) => {
    const { executedQty, origQty, price, side, symbol, time, type } = position;
    const formattedData = {
        time: new Date(time).toLocaleString(),
        symbol,
        type,
        side,
        price: parseStringToFixed(price),
        amount: parseStringToFixed(String(+origQty * +price)),
        filled: executedQty
    };
    const classesFor = (side: 'SELL' | 'BUY') =>
        twMerge(
            side === 'BUY' && 'text-green-500',
            side === 'SELL' && 'text-red-500'
        );

    return (
        <tr className="text-center odd:bg-slate-50 even:bg-slate-100">
            <td>{formattedData.time}</td>
            <td>{formattedData.symbol}</td>
            <td>{formattedData.type}</td>
            <td className={classesFor(formattedData.side)}>
                {formattedData.side}
            </td>
            <td>{formattedData.price}</td>
            <td>{formattedData.amount}</td>
            <td>{formattedData.filled}</td>
        </tr>
    );
};
