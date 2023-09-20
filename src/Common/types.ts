import { ACTION } from "."
import { Player } from "../Player"

export type SocketBody = {
    action: ACTION,
    args: any
}

export type CreateBoardDto = {
    admin: Player
}