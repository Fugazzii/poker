import { RequestHandler } from ".";
import { Board } from "../Board";
import { SocketBody } from "../Common";
import { Player } from "../Player";

/** Central Server */
export class Server {
        
    private static players = new Map<string, Player>();
    private static boards = new Map<string, Board>();
    private static requestHandler = new RequestHandler();

    public constructor() {}

    public listen() {
        Bun.serve({
            fetch(req, server) {                
                const { pathname } = new URL(req.url);

                /*
                 * Let's pass data as a default for every ws object below
                 * We need this because every socket needs to have same handler and boards
                 * They are not supposed to be created after every new connection
                 * `this` keyword is complicated here because this refers to Bun.serve object instead of class
                */
                const success = server.upgrade(req, { 
                    data: { pathname }
                });
                
                if(!success) {
                    return new Response("WebSocket upgrade error", {
                        status: 400
                    });
                }

                return new Response("Success!");
            },
            websocket: {
                open(ws) {
                    ws.send("Server is listening");
                },
                async message(ws, message: string) {
                    
                    /**
                     * TODO: We need to pass handle request based on `message` arg
                     * TODO: `message` is supposed to be passed into `requestHandler` and return certain data
                     * TODO: Messages can be `createBoard`, `addPlayer`, `/board/action/shuffle`
                     */

                    const socketBody: SocketBody = await JSON.parse(message);

                    const response = RequestHandler.handle(socketBody, Server.players, Server.boards);

                    ws.send(response);
                },
                close(ws) {
                    ws.send(`Server closed`);
                }
            },
            port: 3001,
            hostname: Bun.env.HOST
        });
    }

}