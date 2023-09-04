import { WidgetLayout } from './WidgetLayout';

type Props = {
    totalVolume: string;
};

export const TotalVolume = ({ totalVolume }: Props) => {
    return <WidgetLayout title="Total traded volume:" value={totalVolume} />;
};
