import { Input } from '../Input/Input';

type Props = {
    orderType: 'LIMIT' | 'MARKET';
    price: string;
    quantity: string;
    onPriceChange: ({
        target: { value }
    }: React.ChangeEvent<HTMLInputElement>) => void;
    onQuantityChange: ({
        target: { value }
    }: React.ChangeEvent<HTMLInputElement>) => void;
};

const OrderValues = ({
    orderType,
    onPriceChange,
    onQuantityChange,
    price,
    quantity
}: Props) => {
    return (
        <>
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
        </>
    );
};
export default OrderValues;
