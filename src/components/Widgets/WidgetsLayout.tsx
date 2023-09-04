import { ReactNode } from 'react';

type Props = {
    widgets: ReactNode;
};

export const WidgetsLayout = ({ widgets }: Props) => {
    return (
        <div className="flex h-full w-full flex-col items-center justify-start">
            <div className="h-16 w-full">{widgets}</div>
        </div>
    );
};
