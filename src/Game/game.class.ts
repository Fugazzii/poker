import { randomUUID } from "crypto";
import { Card } from "../Card";
import { Dealer } from "../Dealer";
import { Player } from "../Player";
import { Board } from "../Board";
import { Err, Ok, Result, expect } from "../Common";

export class Game {

    public ID: string;
    private initialBet: number;
    private currentRountBet: number;

    public constructor(
        private board: Board,
        private dealer: Dealer,
        private players: Array<Player>
    ) {
        this.ID = randomUUID();
        this.initialBet = 1;
        this.currentRountBet = 1;
    }

    public begin() {
        const validGame = this._validateGame();
        expect(validGame, "Invalid game");
        this._dealCards();
        this._askPlayersForBet();
    }

    private _dealCards() {
        this.dealer.shuffle();

        let i = 0;
        while(!this.dealer.allDealt()) {
            const card = this.dealer.deal();
            this.players[i].giveCard(card);

            i === this.players.length - 1 ? i = 0 : i += 1;
        }
    }

    private _validateGame(): Result<null, Error> {
        const validNumberOfPlayers = this.players.length > 1 && this.players.length < 7;
        const everyPlayerHasMoney = this.players.every(player => player.getMoney() >= this.initialBet);
      
        const validGame = validNumberOfPlayers && everyPlayerHasMoney;
      
        return validGame ? Ok(null) : Err(new Error("Invalid game"));
    }
      
    private _askPlayersForBet() {
        for(let player of this.players) {
            while(true) {
                const bet = player.askForBet();
                if(bet >= this.currentRountBet) {
                    this.currentRountBet = bet;
                    this.board.addMoney(bet);
                    break;
                }
            }
        }
    }
}