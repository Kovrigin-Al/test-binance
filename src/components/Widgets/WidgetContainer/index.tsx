import { BestBid } from './BestBid';
import { LastPrice } from './LastPrice';
import { TotalVolume } from './TotalVolume';
import { Loading } from '../../Loading/Loading';

import { useWebSocket } from '../../../hooks/useWebSocket';

export const WidgetsContainer = () => {
    const { tickerData } = useWebSocket();

    if (!tickerData) {
        return <Loading />;
    }
    return (
        <div className="flex w-full flex-nowrap items-center gap-5 px-3">
            <LastPrice lastPrice={tickerData.c} />
            <BestBid bestBid={tickerData.b} />
            <TotalVolume totalVolume={tickerData.v} />
        </div>
    );
};
