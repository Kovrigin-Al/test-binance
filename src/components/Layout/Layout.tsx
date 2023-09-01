import { ReactNode } from 'react';

type Props = {
    RightSection: ReactNode;
    TopSection: ReactNode;
    MainSection: ReactNode;
    BottomSection: ReactNode;
};

export const Layout = ({
    RightSection,
    TopSection,
    MainSection,
    BottomSection
}: Props) => {
    return (
        <div className="relative h-screen w-screen bg-slate-200 pr-[20%] pt-12 ">
            <div className="absolute left-0 top-0 h-12 w-screen border-b border-black">
                {TopSection}
            </div>
            <div className="h-3/4 w-full bg-red-100">{MainSection}</div>
            <div className="h-1/4 w-full overflow-y-scroll bg-slate-200">
                {BottomSection}
            </div>
            <div className="absolute right-0 top-0 h-screen w-[20%] pt-12">
                <div className={'h-full border-l border-black'}>
                    {RightSection}
                </div>
            </div>
        </div>
    );
};
