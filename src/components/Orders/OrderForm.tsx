import { useState } from 'react';

import { OrderTypes } from '../OrderTypes/OrderTypes';
import Button from '../Button/Button';
import { Input } from '../Input/Input';

import useInput from '../../hooks/useInput';
import { OrderType, PlaceOrderParams } from '../../api/postOrder.types';

type Props = {
    triggerRequest: (params: PlaceOrderParams) => Promise<void>;
    isLoading: boolean;
};

export const OrderForm = ({ triggerRequest, isLoading }: Props) => {
    const [side, setSide] = useState<'BUY' | 'SELL'>('BUY');
    const [price, onPriceChange] = useInput();
    const [quantity, onQuantityChange] = useInput();
    const [orderType, setOrderType] = useState<'LIMIT' | 'MARKET'>('LIMIT');

    const checkFields = () => {
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

    const isDisabled = !checkFields() || isLoading;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (checkFields()) {
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
                {orderType === 'LIMIT' && (
                    <Input
                        placeholder="Price"
                        min={0.01}
                        step={0.01}
                        value={price}
                        onChange={onPriceChange}
                        type="number"
                    />
                )}
                <Input
                    placeholder="Size"
                    min={0.01}
                    step={0.01}
                    value={quantity}
                    onChange={onQuantityChange}
                    type="number"
                />
            </div>
            <div className="my-5 flex w-full justify-around">
                <Button
                    variant="lg"
                    color="success"
                    type="submit"
                    disabled={isDisabled}
                    onClick={() => setSide('BUY')}
                >
                    Buy
                </Button>
                <Button
                    variant="lg"
                    color="error"
                    type="submit"
                    disabled={isDisabled}
                    onClick={() => setSide('SELL')}
                >
                    Sell
                </Button>
            </div>
        </form>
    );
};
