import { randomUUID } from "crypto";
import { Card } from "../Card";
import { Dealer } from "../Dealer";
import { Player } from "../Player";
import { Board } from "../Board";

export class Game {

    public ID: string;

    public constructor(
        private board: Board,
        private dealer: Dealer,
        private players: Array<Player>
    ) {
        this.ID = randomUUID();
    }

    public begin() {}

    public _dealCards() {
        this.dealer.shuffle();

        let i = 0;
        while(!this.dealer.allDealt()) {
            const card = this.dealer.deal();
            this.players[i].giveCard(card);

            i === this.players.length - 1 ? i = 0 : i += 1;
        }
    }

}