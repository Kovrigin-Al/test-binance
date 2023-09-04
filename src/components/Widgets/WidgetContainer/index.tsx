import { memo } from 'react';

import { BestBid } from './BestBid';
import { LastPrice } from './LastPrice';
import { TotalVolume } from './TotalVolume';

type Props = {
    lastPrice: string;
    bestBid: string;
    totalVolume: string;
};

export const WidgetsContainer = memo(
    ({ lastPrice, bestBid, totalVolume }: Props) => {
        return (
            <div className="flex w-full flex-nowrap items-center gap-5 px-3">
                <LastPrice {...{ lastPrice }} />
                <BestBid {...{ bestBid }} />
                <TotalVolume {...{ totalVolume }} />
            </div>
        );
    }
);
