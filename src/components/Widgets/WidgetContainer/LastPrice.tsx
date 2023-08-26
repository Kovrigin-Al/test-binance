import { memo } from 'react';

import { WidgetLayout } from './WidgetLayout';

type Props = {
    lastPrice: string;
};

export const LastPrice = memo(({ lastPrice }: Props) => {
    return <WidgetLayout title="Last price:" value={lastPrice} />;
});
