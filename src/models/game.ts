import { gameStatus } from "../enums/gameStatus";
import { placeHolder } from "../enums/placeHolder";
import { Winner } from "../enums/winner";

export interface Game {
    id?: string,
    player1Id: string,
    player2Id: string,
    moves: placeHolder[][],
    status: gameStatus,
    winner: Winner
}
