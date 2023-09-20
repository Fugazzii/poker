import { ACTION } from "."

export type SocketBody = {
    action: ACTION,
    args: any
}