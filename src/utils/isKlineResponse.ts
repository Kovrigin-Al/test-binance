import { KlineResponse } from '../types/ws';

export function isKlineResponse(res: any): res is KlineResponse {
    const checkStringProperty = (property: string) =>
        Object.hasOwn(res.k, property) && typeof res.k[property] === 'string';
    const checkNumberProperty = (property: string) =>
        Object.hasOwn(res.k, property) && typeof res.k[property] === 'number';

    return (
        typeof res === 'object' &&
        res !== null &&
        Object.hasOwn(res, 'e') &&
        typeof res['e'] === 'string' &&
        Object.hasOwn(res, 's') &&
        typeof res['s'] === 'string' &&
        Object.hasOwn(res, 'E') &&
        typeof res['E'] === 'number' &&
        Object.hasOwn(res, 'k') &&
        typeof res.k === 'object' &&
        ['s', 'i', 'o', 'c', 'h', 'l', 'v', 'q', 'V', 'Q', 'B'].every(
            checkStringProperty
        ) &&
        ['f', 'T', 'L', 'n', 't'].every(checkNumberProperty) &&
        Object.hasOwn(res.k, 'x') &&
        typeof res.k['x'] === 'boolean'
    );
}
