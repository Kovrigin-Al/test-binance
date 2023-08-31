import { InputHTMLAttributes } from 'react';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ ...props }: IInput) => {
    return (
        <input
            {...props}
            className={
                ' block w-full rounded-md border border-slate-300 bg-white py-2 pl-9 pr-3 shadow-sm placeholder:text-slate-400 invalid:border-red-500 invalid:text-red-600 focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500 sm:text-sm'
            }
        />
    );
};
