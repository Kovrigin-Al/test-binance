import { useEffect, useState } from 'react';

export const usePolling = <T>(callback: () => Promise<T>) => {
    const [data, setData] = useState<T>();
    const [error, setError] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            callback().then(setData).catch(setError);
        }, 3_000);
        return () => clearInterval(interval);
    }, []);

    return { data, error };
};
