import { UTCTimestamp } from "lightweight-charts";

import { Point } from "./useChart";
import { KlineResponse } from "../../../types/ws";

export const extractPoint: (data: KlineResponse) => Point = ({ k: data }) => ({
    value: +data.c,
    time: data.t / 1000 as UTCTimestamp,
});