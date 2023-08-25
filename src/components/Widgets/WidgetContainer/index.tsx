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
            <div className="flex w-1/2 flex-col gap-5 ">
                <LastPrice {...{ lastPrice }} />
                <BestBid {...{ bestBid }} />
                <TotalVolume {...{ totalVolume }} />
            </div>
        );
    }
);