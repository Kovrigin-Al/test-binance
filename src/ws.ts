const availableTokens: string[] = [
    "bchusdt@ticker"
];

export class BinanceWS {
    private ws: WebSocket | null = null;

    constructor(url: string, onMessage: ({ data }: any) => void) {
        if (!this.ws) {
            const ws = new WebSocket(url);
            BinanceWS.addListeners(ws, onMessage);
            this.ws = ws;
        }
    }

    closeConnection(onMessage: ({ data }: any) => void) {
        this.ws?.close();
        this.removeEventListener(onMessage);
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
        if (!this.ws) {
            throw new Error('Websocket instance doesn\'t exist');
        }
        this.ws.removeEventListener('open', BinanceWS.handleOpen);
        this.ws.removeEventListener('error', BinanceWS.handleError);
        this.ws.removeEventListener('close', BinanceWS.handleClose);
        this.ws.removeEventListener('message', onMessage);
    }

}