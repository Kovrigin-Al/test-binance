type Props = {
    title: string;
    value: string;
};

export const WidgetLayout = ({ title, value }: Props) => {
    return (
        <div className="flex w-full flex-nowrap items-baseline justify-between">
            <div className="font-bold">{title}</div>
            <div className=" animate-ping-slow" key={value}>
                {parseFloat(value).toFixed(2)}
            </div>
        </div>
    );
};
