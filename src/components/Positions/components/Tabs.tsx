import { twMerge } from 'tailwind-merge';

import { slideType } from '..';

type Props = {
    showOrders: VoidFunction;
    showPositions: VoidFunction;
    openedSlide: keyof typeof slideType;
};

export const Tabs = ({ showOrders, showPositions, openedSlide }: Props) => {
    const classesFor = (type: keyof typeof slideType) =>
        twMerge(
            type === openedSlide && 'font-bold bg-red-100',
            'hover:cursor-pointer h-full flex justify-center items-center w-28 '
        );
    return (
        <div className="flex h-8 w-full  divide-slate-400 border-b-[1px]">
            <div
                className={classesFor(slideType.positions)}
                onClick={showPositions}
            >
                Positions
            </div>
            <div
                className={classesFor(slideType.openOrders)}
                onClick={showOrders}
            >
                Open Orders
            </div>
        </div>
    );
};
