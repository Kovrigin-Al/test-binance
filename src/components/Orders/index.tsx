import { useEffect } from 'react';

import { OrderForm } from './OrderForm';

import { useRequestWithAbort } from '../../hooks/useRequestWithAbort';
import { placeOrder } from '../../api/postOrder';
import { PlaceOrderParams } from '../../api/postOrder.types';
import { usePolling } from '../../hooks/usePolling';
import { getBalance } from '../../api/getBalance';

export const Orders = () => {
    const {
        triggerRequest,
        data: placeOrderResponse,
        error,
        isLoading
    } = useRequestWithAbort<PlaceOrderParams>(placeOrder);

    const { data: balance } = usePolling(getBalance);

    useEffect(() => {
        placeOrderResponse && alert('Order submitted');
    }, [placeOrderResponse]);

    useEffect(() => {
        error && alert(error);
    }, [error]);

    return (
        <div className="flex w-full justify-around">
            <OrderForm
                triggerRequest={triggerRequest}
                isLoading={isLoading}
                balance={balance}
            />
        </div>
    );
};
