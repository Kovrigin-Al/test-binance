const availableTokens: string[] = [
    "bnbusdt@ticker"
];

let ws: WebSocket | null = null;
export class BinanceWS {

    constructor(url: string, onMessage: ({ data }: any) => void) {
        if (!ws) {
            ws = new WebSocket(url);
            BinanceWS.addListeners(ws, onMessage);
        }
    }

    closeConnection(onMessage: ({ data }: any) => void) {
        ws?.close();
        this.removeEventListener(onMessage);
        ws = null;
    }


    private static handleOpen(this: WebSocket) {
        const openConnectPayload = {
            "method": "SUBSCRIBE",
            params: availableTokens,
            id: 1
        };
        this.send(JSON.stringify(openConnectPayload));
        console.log("WS connection has been established successfully.");
    };

    private static handleError(this: WebSocket, event: Event) {
        console.error(event);
    }

    private static handleClose(this: WebSocket, event: CloseEvent) {
        console.log(`WS connection is closed. `, event);
    }

    private static addListeners(ws: WebSocket, onMessage: ({ data }: any) => void) {

        ws.onopen = BinanceWS.handleOpen;
        ws.onerror = BinanceWS.handleError;
        ws.onclose = BinanceWS.handleClose;
        ws.onmessage = onMessage;
    };

    private removeEventListener(onMessage: ({ data }: any) => void) {
        if (!ws) {
            throw new Error('Websocket instance doesn\'t exist');
        }
        ws.removeEventListener('open', BinanceWS.handleOpen);
        ws.removeEventListener('error', BinanceWS.handleError);
        ws.removeEventListener('close', BinanceWS.handleClose);
        ws.removeEventListener('message', onMessage);
    }

}