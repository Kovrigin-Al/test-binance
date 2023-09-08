import { createChart, ColorType, UTCTimestamp } from "lightweight-charts";
import { useRef, useEffect } from "react";

const backgroundColor = 'white';
const lineColor = '#2962FF';
const textColor = 'black';
const areaTopColor = '#2962FF';
const areaBottomColor = 'rgba(41, 98, 255, 0.28)';

export type Point = {
    time: UTCTimestamp, value: number;
};

export const useChart = (data: Point[]) => {
    const chartContainerRef = useRef<HTMLDivElement>(null);
    useEffect(
        () => {
            if (!chartContainerRef.current || data.length === 0) {
                return;
            }
            chartContainerRef.current;
            const handleResize = () => {
                chart.applyOptions({ width: chartContainerRef.current?.clientWidth });
            };

            const chart = createChart(chartContainerRef.current, {
                layout: {
                    background: { type: ColorType.Solid, color: backgroundColor },
                    textColor,
                },
                width: chartContainerRef.current.clientWidth,
                height: chartContainerRef.current.clientHeight
            });
            chart.timeScale().applyOptions({ ticksVisible: true, timeVisible: true, rightBarStaysOnScroll: true });

            const newSeries = chart.addLineSeries();
            newSeries.setData(data);
            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);

                chart.remove();
            };
        },
        [data, backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor]
    );

    return chartContainerRef;
};