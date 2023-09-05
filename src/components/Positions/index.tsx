import { ReactNode, useState } from 'react';
import { PositionsTable } from './components/PositionsTable';
import { Tabs } from './components/Tabs';
import { usePolling } from '../../hooks/usePolling';
import { getPositions } from '../../api/getPositions';
import { getLimitPositions } from '../../api/getLimitPositions';
import { LimitPositionsTable } from './components/LimitPositionsTable';

export const slideType = {
    positions: 'positions',
    openOrders: 'openOrders'
} as const;

export const Positions = () => {
    const [slide, setSlide] = useState<keyof typeof slideType>(
        slideType.positions
    );

    const { data: positions, error: positionsError } = usePolling(getPositions);
    const { data: limitPositions, error: limitPositionsError } =
        usePolling(getLimitPositions);

    if (positionsError || limitPositionsError) {
        throw new Error('Error on get position request');
    }

    const showOrders = () => {
        setSlide(slideType.openOrders);
    };

    const showPositions = () => {
        setSlide(slideType.positions);
    };

    const tables: { [key in keyof typeof slideType]: ReactNode } = {
        openOrders: <LimitPositionsTable positions={limitPositions} />,
        positions: <PositionsTable positions={positions} />
    };

    return (
        <div className="flex h-full w-full flex-col items-start ">
            <Tabs
                showOrders={showOrders}
                showPositions={showPositions}
                openedSlide={slide}
            />
            {tables[slide]}
        </div>
    );
};
