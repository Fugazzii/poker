import { log } from "console";
import { ACTION, SocketBody } from "../Common";

export class RequestHandler {
    

    public constructor() {}

    public static handle(socketBody: SocketBody) {
        
        const { action } = socketBody;

        switch(action) {
            case ACTION.CREATE_BOARD: return `Board created`;
            case ACTION.JOIN_BOARD:   return `Joining board`;
            case ACTION.LEAVE_BOARD:  return `Leaving board...`;
            case ACTION.NEW_PLAYER:   return `New Player`;
            default:
                return "default"
        }
    }

}