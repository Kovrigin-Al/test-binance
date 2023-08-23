import axios from 'axios';
import { useState, useEffect } from 'react';
import { from, forkJoin } from 'rxjs';

const IMAGE_URLS = [
    'https://www.svgrepo.com/download/448058/logo.svg',
    'https://www.svgrepo.com/download/424929/logo-raspberry-pi-open-source.svg',
    'https://www.svgrepo.com/download/327371/logo-ionitron.svg'
];

export const useImages = () => {
    const [images, setImages] = useState<string[]>();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const observables$ = IMAGE_URLS.map((url) =>
            from(axios.get<string>(url).then((response) => response.data))
        );
        const subscription = forkJoin(observables$).subscribe({
            complete: () => setIsLoading(false),
            error: (error) => setError(error),
            next: (data) => setImages(data)
        });

        return () => {
            subscription.unsubscribe();
        };
    }, []);

    return { images, isLoading, error };
};
