import { twMerge } from 'tailwind-merge';

import { OrderType } from '../../../api/postOrder.types';

type Props = {
    type: OrderType;
    handleChangeOrderType: (type: OrderType) => void;
};
export const OrderTypes = ({ type, handleChangeOrderType }: Props) => {
    return (
        <div className="mx-auto text-slate-800">
            <div
                className={twMerge(
                    type === 'LIMIT'
                        ? 'text-yellow-500'
                        : 'hover:cursor-pointer',
                    'mx-2 inline'
                )}
                onClick={() => handleChangeOrderType('LIMIT')}
            >
                Limit
            </div>
            <div
                className={twMerge(
                    type === 'MARKET'
                        ? 'text-yellow-500'
                        : 'hover:cursor-pointer',
                    'mx-2 inline'
                )}
                onClick={() => handleChangeOrderType('MARKET')}
            >
                Market
            </div>
        </div>
    );
};
