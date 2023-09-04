import { Position } from '../../../api/getPositions';
import { PositionRow } from './PositionRow';

type Props = { positions: Position[] };

export const PositionTable = ({ positions }: Props) => {
    return (
        <table className="h-ful w-full table-fixed border-t-[1px] border-black">
            <thead className="sticky top-0 border-b-2 border-slate-200 bg-slate-100">
                <tr>
                    <th>Symbol</th>
                    <th>Size</th>
                    <th>Entry price</th>
                    <th>Mark price</th>
                    <th>Profit</th>
                </tr>
            </thead>
            <tbody>
                {positions.map((p) => (
                    <PositionRow key={p.symbol} position={p} />
                ))}
            </tbody>
        </table>
    );
};
