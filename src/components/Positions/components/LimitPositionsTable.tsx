import { Loading } from '../../Loading/Loading';
import { LimitPositionRow } from './LimitPositionRow';

import { LimitPosition } from '../../../api/getLimitPositions';

type Props = { positions?: LimitPosition[] };

export const LimitPositionsTable = ({ positions }: Props) => {
    if (!positions) {
        return <Loading />;
    }

    return (
        <table className="h-ful w-full table-fixed border-t-[1px] border-black">
            <thead className="sticky top-0 border-b-2 border-slate-200 bg-slate-100">
                <tr>
                    <th>Time</th>
                    <th>Symbol</th>
                    <th>Type</th>
                    <th>Side</th>
                    <th>Price</th>
                    <th>Amount</th>
                    <th>Filled</th>
                </tr>
            </thead>
            <tbody>
                {positions.map((p) => (
                    <LimitPositionRow key={p.time} position={p} />
                ))}
            </tbody>
        </table>
    );
};
