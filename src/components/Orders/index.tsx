import { useEffect } from 'react';

import { OrderForm } from './OrderForm';

import { useRequestWithAbort } from '../../hooks/useRequestWithAbort';
import { placeOrder } from '../../api/postOrder';
import { PlaceOrderParams } from '../../api/postOrder.types';

export const Orders = () => {
    const { triggerRequest, data, error, isLoading } =
        useRequestWithAbort<PlaceOrderParams>(placeOrder);

    useEffect(() => {
        data && alert('Order submitted');
    }, [data]);
    useEffect(() => {
        error && alert(error);
    }, [error]);

    return (
        <div className="flex w-full justify-around">
            <OrderForm triggerRequest={triggerRequest} isLoading={isLoading} />
        </div>
    );
};
