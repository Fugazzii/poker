import { log } from "console";
import { ACTION, SocketBody } from "../Common";
import { Board } from "../Board";
import { Player } from "../Player";

export class RequestHandler {
    

    public constructor() {}

    public static handle(
        socketBody: SocketBody,
        players: Map<string, Player>,
        boards: Map<string, Board>
    ) : string {
        
        const { action, args } = socketBody;

        const { username, money } = args;


        switch(action) {
            case ACTION.NEW_PLAYER:

                const newPlayer = Player.createPlayer(username, money);

                players.set(newPlayer.getUsername(), newPlayer);

                return `Player created: ${newPlayer.getUsername()}`;
            
            case ACTION.CREATE_BOARD: 
                const board = new Board(socketBody.args.admin);
                
                console.log(`Creating board`);

                return "board";
            case ACTION.JOIN_BOARD:   return `Joining board`;
            case ACTION.LEAVE_BOARD:  return `Leaving board...`;
            default:
                return "default"
        }
    }

}