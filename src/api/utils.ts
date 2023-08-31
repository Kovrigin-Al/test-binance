import CryptoJS from 'crypto-js';

const apiKey = import.meta.env.VITE_API_KEY;
const apiSecret = import.meta.env.VITE_API_SECRET;
const baseUrl = import.meta.env.VITE_REST_BASE_URL;

export const createUrl = (
    path: string,
    queryParams: { [key: string]: unknown }
) => {
    const paramsStringified = Object.keys(queryParams)
        .map((key) => {
            const value = queryParams[key as keyof typeof queryParams];
            if (value) {
                return `${key}=${value}`;
            }
        })
        .join('&');
    const signature = CryptoJS.HmacSHA256(
        paramsStringified,
        apiSecret
    ).toString();
    return `${baseUrl}${path}?${paramsStringified}&signature=${signature}`;
};

export const getAxiosHeaderParam = () => ({
    headers: { 'X-MBX-APIKEY': apiKey }
});

export const isMsgInResponse = (
    response: unknown
): response is { msg: string } => {
    return (
        typeof response === 'object' && response !== null && 'msg' in response
    );
};
