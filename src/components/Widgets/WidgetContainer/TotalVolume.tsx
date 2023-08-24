import { WidgetLayout } from './WidgetLayout';

type Props = {
    totalVolume: string;
};

export const TotalVolume = ({ totalVolume }: Props) => {
    return (
        <WidgetLayout
            title="Total traded base asset volume:"
            value={parseFloat(totalVolume)}
        />
    );
};
