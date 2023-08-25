/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            animation: {
                'ping-slow': 'pulse 600ms cubic-bezier(0.4, 0, 0.6, 1)'
            }
        }
    },
    plugins: []
};
