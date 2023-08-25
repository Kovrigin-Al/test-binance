import axios from 'axios';
import { useState, useEffect } from 'react';
import { from, forkJoin } from 'rxjs';

const IMAGE_URLS = [
    'https://site-assets.fontawesome.com/releases/v6.4.2/svgs/solid/face-laugh.svg',
    'https://site-assets.fontawesome.com/releases/v6.4.2/svgs/solid/hippo.svg',
    'https://site-assets.fontawesome.com/releases/v6.4.2/svgs/solid/chart-line.svg'
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
