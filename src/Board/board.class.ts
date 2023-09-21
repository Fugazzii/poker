import { randomBytes, randomUUID } from "crypto";
import { Card } from "../Card";
import { Dealer } from "../Dealer";
import { Player } from "../Player";
import { Game } from "../Game";

export class Board {

    public ID: string;

    private cardsOnBoard: Array<Card>;
    private players: Array<Player>;
    private dealer: Dealer;
    private moneyOnTheBoard: number;

    private constructor(
        private admin: Player
    ) {
        this.ID = randomUUID();
        this.dealer = Dealer.create();
        this.cardsOnBoard = new Array<Card>();
        this.players = new Array<Player>(this.admin);
        this.moneyOnTheBoard = 0;
    }

    public startGame() {
        const game = new Game(this, this.dealer, this.players);

        game.begin();
    }

    public static create(admin: Player) {
        return new Board(admin);
    }

    public join(newPlayer: Player) {
        this.players.push(newPlayer);
    }

    public addMoney(money: number) {
        this.moneyOnTheBoard += money;
    }

    public pickUpMoney() { this.moneyOnTheBoard = 0; }
    public allMoney() { return this.moneyOnTheBoard; }
}