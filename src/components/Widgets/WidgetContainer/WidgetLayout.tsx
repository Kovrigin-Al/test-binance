import { parseStringToFixed } from '../../../utils/parseStringToFixed';

type Props = {
    title: string;
    value: string;
};

export const WidgetLayout = ({ title, value }: Props) => {
    return (
        <div className="flex w-full flex-nowrap items-baseline justify-start gap-3 text-sm">
            <div className="font-bold">{title}</div>
            <div className=" animate-ping-slow" key={value}>
                {parseStringToFixed(value)}
            </div>
        </div>
    );
};
