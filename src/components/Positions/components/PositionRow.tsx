import { twMerge } from 'tailwind-merge';

import { parseStringToFixed } from '../../../utils/parseStringToFixed';

import { Position } from '../../../api/getPositions';

type Props = {
    position: Position;
};

export const PositionRow = ({ position }: Props) => {
    const { entryPrice, markPrice, positionAmt, symbol, unRealizedProfit } =
        position;

    const transformedData: { [key in keyof typeof position]: string } = {
        entryPrice: parseStringToFixed(entryPrice),
        markPrice: parseStringToFixed(markPrice),
        unRealizedProfit: parseStringToFixed(unRealizedProfit),
        positionAmt,
        symbol
    };

    const classesFor = (profit: string) =>
        twMerge(Number(profit) > 0 ? 'text-green-500' : 'text-red-500');

    return (
        <tr className="text-center odd:bg-slate-50 even:bg-slate-100">
            <td>{transformedData.symbol}</td>
            <td>{transformedData.positionAmt}</td>
            <td>{transformedData.entryPrice}</td>
            <td>{transformedData.markPrice}</td>
            <td className={classesFor(transformedData.unRealizedProfit)}>
                {transformedData.unRealizedProfit}
            </td>
        </tr>
    );
};
