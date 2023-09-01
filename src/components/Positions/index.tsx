import { getPositions } from '../../api/getPositions';
import { usePolling } from '../../hooks/usePolling';
import { Loading } from '../Loading/Loading';
import { PositionTable } from './components/PositionTable';

export const Positions = () => {
    const { data, error } = usePolling(getPositions);

    if (error) {
        throw new Error('Error on get position request');
    }

    if (!data) {
        return <Loading />;
    }

    return <PositionTable positions={data} />;
};
