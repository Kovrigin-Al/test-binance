import { useState } from 'react';

import { OrderTypes } from './OrderTypes/OrderTypes';
import { PlaceOrderButton } from './PlaceOrderButton';
import { Balance } from './Balance';
import OrderValues from './OrderValues';

import useInput from '../../hooks/useInput';
import { OrderType, PlaceOrderParams } from '../../api/postOrder.types';

type Props = {
    triggerRequest: (params: PlaceOrderParams) => Promise<void>;
    isLoading: boolean;
    balance?: string;
};

export const OrderForm = ({ triggerRequest, isLoading, balance }: Props) => {
    const [side, setSide] = useState<'BUY' | 'SELL'>('BUY');
    const [price, onPriceChange] = useInput();
    const [quantity, onQuantityChange] = useInput();
    const [orderType, setOrderType] = useState<'LIMIT' | 'MARKET'>('LIMIT');

    const checkFieldsAreProvided = () => {
        if (orderType === 'LIMIT') {
            return !!(
                price &&
                quantity &&
                Number(price) > 0 &&
                Number(quantity) > 0 &&
                side
            );
        }
        return !!(quantity && Number(quantity) > 0 && side);
    };

    const isDisabled = !checkFieldsAreProvided() || isLoading;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (checkFieldsAreProvided()) {
            const payload: PlaceOrderParams = {
                quantity,
                side,
                type: orderType,
                symbol: 'BNBUSDT',
                ...(orderType === 'LIMIT' && { price })
            };
            triggerRequest(payload);
        }
    };

    const handleChangeOrderType = (type: OrderType) => {
        setOrderType(type);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="my-5 flex w-full flex-col gap-2">
                <OrderTypes
                    type={orderType}
                    handleChangeOrderType={handleChangeOrderType}
                />
                <OrderValues
                    {...{
                        onPriceChange,
                        onQuantityChange,
                        orderType,
                        price,
                        quantity
                    }}
                />
            </div>
            <div className="my-5 flex w-full justify-around">
                <PlaceOrderButton {...{ isDisabled, setSide }} name="BUY" />
                <PlaceOrderButton {...{ isDisabled, setSide }} name="SELL" />
            </div>
            <Balance balance={balance} />
        </form>
    );
};
