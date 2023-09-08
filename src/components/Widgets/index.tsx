import { Chart } from './Chart';
import { WidgetsContainer } from './WidgetContainer';
import { WidgetsLayout } from './WidgetsLayout';

export const Widgets = () => {
    return <WidgetsLayout widgets={<WidgetsContainer />} chart={<Chart />} />;
};
