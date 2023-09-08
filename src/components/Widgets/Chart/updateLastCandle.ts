import { Point } from "./useChart";

export const updateLastCandle = (current: Point[], newCandle: Point) => {
    if (newCandle.time > current[current.length - 1].time) {
        return [...current, newCandle];
    }
    return current.slice(0, -1).concat(newCandle);
};