import { memo } from 'react';

import { WidgetLayout } from './WidgetLayout';

type Props = {
    bestBid: string;
};

export const BestBid = memo(({ bestBid }: Props) => {
    return <WidgetLayout title="Best bid price:" value={bestBid} />;
});
