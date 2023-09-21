import { ACTION } from "."
import { Player } from "../Player"

export type SocketBody = {
    action: ACTION,
    args: any
}

export type CreateBoardDto = {
    admin: Player
}

export type Result<T, E> = {
    ok: true;
    value: T;
  } | {
    ok: false;
    error: E;
  };
  
export function Ok<T, E>(value: T): Result<T, E> {
    return { ok: true, value };
}

export function Err<T, E>(error: E): Result<T, E> {
    return { ok: false, error };
}

export function expect<T, E>(result: Result<T, E>, message: string): T {
    if (result.ok) {
      return result.value;
    } else {
      throw new Error(message);
    }
}