import { FC, ReactNode } from "react";

type Props = {
    RightSection: ReactNode;
    TopSection: ReactNode;
    MainSection: ReactNode;
};

export const Layout: FC<Props> = ({ RightSection, TopSection, MainSection }) => {
    return (
        <div className="w-screen h-screen bg-slate-200 relative pt-12 pr-[20%] ">
            <div className="absolute top-0 left-0 w-screen h-12 border-b border-black">
                {TopSection}
            </div>
            <div className="w-full h-full bg-red-100">{MainSection}</div>
            <div className="absolute h-screen w-[20%] right-0 top-12 border-l border-black">
                {RightSection}
            </div>
        </div>
    );
};
