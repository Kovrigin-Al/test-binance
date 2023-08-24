import { useWebSocket } from '../../hooks/useWebSocket';
import { Loading } from '../Loading/Loading';
import { WidgetsContainer } from './WidgetContainer';
import { WidgetsLayout } from './WidgetsLayout';

const PATH = 'bchusdt@ticker';

export const Widgets = () => {
    const data = useWebSocket(PATH);
    return (
        <WidgetsLayout>
            {data ? (
                <WidgetsContainer
                    lastPrice={data.c}
                    bestBid={data.b}
                    totalVolume={data.v}
                />
            ) : (
                <Loading />
            )}
        </WidgetsLayout>
    );
};
