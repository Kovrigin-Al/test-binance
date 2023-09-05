import { TickerResponse } from '../types/ws';

export function isTickerResponse(res: any): res is TickerResponse {
    const checkStringProperty = (property: string) =>
        Object.hasOwn(res, property) && typeof res[property] === 'string';
    const checkNumberProperty = (property: string) =>
        Object.hasOwn(res, property) && typeof res[property] === 'number';

    return (
        typeof res === 'object' &&
        res !== null &&
        Object.hasOwn(res, 'e') &&
        [
            'e',
            's',
            'p',
            'P',
            'w',
            'x',
            'c',
            'Q',
            'b',
            'B',
            'a',
            'A',
            'o',
            'h',
            'l',
            'v',
            'q'
        ].every(checkStringProperty) &&
        ['E', 'O', 'C', 'F', 'L', 'n'].every(checkNumberProperty)
    );
}
