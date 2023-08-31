import { useCallback, useEffect, useState } from 'react';

type ForwardParams = {
    controller: AbortController;
};
type HookParams<T> = (params: ForwardParams & T) => Promise<unknown>;

export const useRequestWithAbort = <T>(request: HookParams<T>) => {
    const [controller, setController] = useState(new AbortController());
    const [data, setData] = useState<unknown>();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<unknown>();

    const triggerRequest = useCallback(
        ({ ...params }: T) => {
            setIsLoading(true);
            setError(undefined);
            return request({ controller, ...params })
                .then((data) => {
                    setData(data);
                })
                .catch((error) => {
                    setError(error);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        },
        [controller]
    );

    useEffect(() => {
        setController(new AbortController());
        return () => {
            return controller.abort();
        };
    }, []);

    return {
        data,
        isLoading,
        error,
        triggerRequest
    };
};
