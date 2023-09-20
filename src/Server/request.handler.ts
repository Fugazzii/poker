import { log } from "console";
import { ACTION, SocketBody } from "../Common";
import { Board } from "../Board";
import { Player } from "../Player";
import { Server } from "http";

export class RequestHandler {
    

    public constructor() {}

    public static handle(
        socketBody: SocketBody,
        players: Map<string, Player>,
        boards: Map<string, Board>
    ) : string {
        
        const { action, args } = socketBody;

        switch(action) {
            case ACTION.NEW_PLAYER:

                const { username, money } = args;
        
                const newPlayer = Player.createPlayer(username, money);

                players.set(newPlayer.getUsername(), newPlayer);

                return `Player created: ${newPlayer.getUsername()}`;
            
            case ACTION.CREATE_BOARD: 

                // Admin username
                const { admin } = args;

                // Player object from admin username
                const adminPlayer = players.get(admin);

                if(adminPlayer === undefined) throw new Error(`Player ${admin} does not exist`);

                const board = Board.createBoard(adminPlayer);

                return `Creating board ${board.ID}`;

            case ACTION.JOIN_BOARD:   return `Joining board`;
            case ACTION.LEAVE_BOARD:  return `Leaving board...`;
            default:
                return "default"
        }
    }

}