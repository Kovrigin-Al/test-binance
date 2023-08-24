import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

export const WidgetsLayout = ({ children }: Props) => {
    return (
        <div className="flex h-full w-full items-center justify-center">
            {children}
        </div>
    );
};
