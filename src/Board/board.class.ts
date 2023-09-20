import { randomBytes, randomUUID } from "crypto";
import { Card } from "../Card";
import { Dealer } from "../Dealer";
import { Player } from "../Player";
import { Game } from "../Game";

export class Board {

    public ID: string;

    private dealer: Dealer;
    public cardsOnBoard: Array<Card>;
    public players: Array<Player>;
    
    private constructor(
        private admin: Player
    ) {
        this.ID = randomUUID();
        this.dealer = Dealer.create();
        this.cardsOnBoard = new Array<Card>();
        this.players = new Array<Player>(this.admin);
    }

    public startGame() {
        const game = new Game(this, this.dealer, this.players);
    }

    public static create(admin: Player) {
        return new Board(admin);
    }

    public join(newPlayer: Player) {
        this.players.push(newPlayer);
    }

}