import { ReactNode } from 'react';

type Props = {
    RightSection: ReactNode;
    TopSection: ReactNode;
    MainSection: ReactNode;
};

export const Layout = ({ RightSection, TopSection, MainSection }: Props) => {
    return (
        <div className="relative h-screen w-screen bg-slate-200 pr-[20%] pt-12 ">
            <div className="absolute left-0 top-0 h-12 w-screen border-b border-black">
                {TopSection}
            </div>
            <div className="h-full w-full bg-red-100">{MainSection}</div>
            <div className="absolute right-0 top-12 h-screen w-[20%] border-l border-black">
                {RightSection}
            </div>
        </div>
    );
};