export type PlaceOrderParams = {
    symbol: string; // ticker
    side: 'BUY' | 'SELL';
    type: 'LIMIT' | 'MARKET';
    price?: string;
    quantity: string; //	Cannot be sent with closePosition=true(Close-All)
};

export type OrderType = 'LIMIT' | 'MARKET';
export type OrderQueryParams = {
    positionSide?:
        | 'BOTH'
        | 'LONG'
        | 'SHORT'
        | 'STOP'
        | 'STOP_MARKET'
        | 'TAKE_PROFIT'
        | 'TAKE_PROFIT_MARKET'
        | 'TRAILING_STOP_MARKET'; // Default BOTH for One-way Mode ; LONG or SHORT for Hedge Mode. It must be sent in Hedge Mode.
    type: OrderType;
    timeInForce?: 'GTC' | 'IOC' | 'FOK' | 'GTX'; //  Good Till Cancel | Immediate or Cancel | Fill or Kill | Good Till Crossing (Post Only)
    reduceOnly?: string; //	"true" or "false". default "false". Cannot be sent in Hedge Mode; cannot be sent with closePosition=true
    newClientOrderId?: string; // A unique id among open orders. Automatically generated if not sent. Can only be string following the rule: ^[\.A-Z\:/a-z0-9_-]{1,36}$
    stopPrice?: number; // Used with STOP/STOP_MARKET or TAKE_PROFIT/TAKE_PROFIT_MARKET orders.
    closePosition?: string; // true, false；Close-All，used with STOP_MARKET or TAKE_PROFIT_MARKET.
    activationPrice?: number; // Used with TRAILING_STOP_MARKET orders, default as the latest price(supporting different workingType)
    callbackRate?: number; // Used with TRAILING_STOP_MARKET orders, min 0.1, max 5 where 1 for 1%
    workingType?: 'MARK_PRICE' | 'CONTRACT_PRICE'; // stopPrice triggered by: "MARK_PRICE", "CONTRACT_PRICE". Default "CONTRACT_PRICE"
    priceProtect?: 'TRUE' | 'FALSE'; //	"TRUE" or "FALSE", default "FALSE". Used with STOP/STOP_MARKET or TAKE_PROFIT/TAKE_PROFIT_MARKET orders.
    newOrderRespType?: 'ACK' | 'RESULT'; //	"ACK", "RESULT", default "ACK"
    recvWindow?: number;
    timestamp: number;
} & PlaceOrderParams;
