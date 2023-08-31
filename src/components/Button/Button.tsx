import { ButtonHTMLAttributes, FC } from 'react';
import { twMerge } from 'tailwind-merge';

import { Loading } from '../Loading/Loading';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean;
    variant?: 'sm' | 'lg';
    color?: 'success' | 'error';
}

const Button: FC<IButton> = ({
    className,
    children,
    isLoading,
    variant,
    color,
    ...props
}) => {
    const styles = twMerge(
        'bg-slate-900 text-white hover:bg-slate-800 h-10 py-2 px-4 active:ring-0 active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-color outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
        variant === 'sm' && 'h-9 px-2',
        variant === 'lg' && 'h-11 px-8',
        color === 'success' && 'bg-green-800 hover:bg-green-700',
        color === 'error' && 'bg-red-800 hover:bg-red-700',
        className
    );
    //removes focus ring from button after press in chrome on macOS
    const handleMouseUp = ({
        currentTarget
    }: React.MouseEvent<HTMLButtonElement, MouseEvent>) => currentTarget.blur();
    return (
        <button
            disabled={isLoading}
            {...props}
            className={styles}
            onMouseUp={handleMouseUp}
        >
            {isLoading && <Loading />}
            {children}
        </button>
    );
};
export default Button;
