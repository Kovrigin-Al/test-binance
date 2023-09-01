import { Position } from '../../../api/getPositions';
import { parseStringToFixed } from '../../../utils/parseStringToFixed';

type Props = {
    position: Position;
};

export const PositionRow = ({ position }: Props) => {
    return (
        <tr className="text-center odd:bg-slate-50 even:bg-slate-100">
            <td>{position.symbol}</td>
            <td>{position.positionAmt}</td>
            <td>{parseStringToFixed(position.entryPrice)}</td>
            <td>{parseStringToFixed(position.markPrice)}</td>
        </tr>
    );
};
