import { useImages } from '../../hooks/useImages';

export const NavBar = () => {
    const { images, isLoading, error } = useImages();

    if (error) {
        throw new Error(error);
    }

    if (isLoading) {
        return (
            <div className="h-full w-full animate-pulse bg-slate-500 p-3">
                {' '}
            </div>
        );
    }

    return (
        <div className={'flex h-full w-full items-center justify-between px-5'}>
            {images &&
                images.map((item, index) => (
                    <img
                        src={`data:image/svg+xml;utf8,${encodeURIComponent(
                            item
                        )}`}
                        key={index}
                        className="h-3/4"
                    />
                ))}
        </div>
    );
};
