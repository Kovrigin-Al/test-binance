import { ReactNode } from 'react';

type Props = {
    widgets: ReactNode;
    chart: ReactNode;
};

export const WidgetsLayout = ({ widgets, chart }: Props) => {
    return (
        <div className="flex h-full w-full flex-col items-center justify-start">
            <div className="flex h-8 w-full items-center">{widgets}</div>
            <div className="h-full w-full bg-white pr-[1px] pt-2">{chart}</div>
        </div>
    );
};
