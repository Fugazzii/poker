import { Board } from "../Board";

/** Central Server */
export class Server {
    
    private readonly boards: Array<Board>;
    
    public constructor() {
        this.boards = new Array();
        this._listen();
    }

    private _listen() {
        Bun.serve({
            fetch(req, server) {
                return new Response("Zd");
            },
            websocket: {
                message(ws, message) {
                    
                },
                open(ws) {

                },
                close(ws, code, message) {},
                drain(ws) {}
            },
            port: 3000,
            hostname: Bun.env.HOST
        })
    }


}