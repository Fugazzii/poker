import { randomBytes, randomUUID } from "crypto";
import { Card } from "../Card";
import { Dealer } from "../Dealer";
import { Player } from "../Player";

export class Board {

    public cardsOnBoard: Array<Card>;
    public players: Array<Player>;
    public dealer: Dealer;
    public ID: string;

    private constructor(
        private admin: Player
    ) {
        this.ID = randomUUID();
        this.cardsOnBoard = new Array<Card>();
        this.players = new Array<Player>(this.admin);
        this.dealer = new Dealer();
    }

    public static createBoard(admin: Player) {
        return new Board(admin);
    }

    public startGame() {
        this.dealer.shuffle();

        let i = 0;
        while(!this.dealer.allDealt()) {
            const card = this.dealer.deal();
            this.players[i].giveCard(card);

            i === this.players.length - 1 ? i = 0 : i++;
        }
    }

    public join(newPlayer: Player) {
        this.players.push(newPlayer);
    }


}