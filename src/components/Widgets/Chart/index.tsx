import { useEffect, useState } from 'react';

import { Point, useChart } from './useChart';
import { extractPoint } from './extractPoint';
import { updateLastCandle } from './updateLastCandle';
import { getChartData } from '../../../api/getChartData';
import { useWebSocket } from '../../../hooks/useWebSocket';

export const Chart = () => {
    const [data, setData] = useState<Point[]>([]);

    useEffect(() => {
        getChartData().then((res) => setData(res));
    }, []);

    const { klineData } = useWebSocket();

    useEffect(() => {
        if (data.length && klineData) {
            setData((prev) => updateLastCandle(prev, extractPoint(klineData)));
        }
    }, [klineData]);

    const chartContainerRef = useChart(data);

    if (data) return <div className="h-full w-full" ref={chartContainerRef} />;
};
