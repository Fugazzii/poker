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

                if(!adminPlayer) throw new Error(`Player ${admin} does not exist`);

                const newBoard = Board.create(adminPlayer);

                return `Creating board ${newBoard.ID}`;

            case ACTION.JOIN_BOARD: 
                
                const { playerUsername, boardId } = args;
                
                const board = boards.get(boardId);                
                if(!board) throw new Error(`${boardId} not found`);

                const playerToJoin = players.get(playerUsername);
                if(!playerToJoin) throw new Error(`${playerUsername} not found`);
                
                board.join(playerToJoin);
                
                return `${playerUsername} joined room ${boardId}`;
                
            case ACTION.LEAVE_BOARD: throw new Error("Unimplemented");
            
            default:
                return "Invalid request"
        }
    }

}