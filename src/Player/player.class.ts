import { Card } from "../Card";

export class Player {

    private readonly hand: Array<Card>;

    private constructor(
        private username: string,
        private money: number
    ) {
        this.hand = new Array<Card>();
    }

    public static createPlayer(username: string, money: number) {
        return new Player(username, money);
    }

    public bet(amount: number) {
        if(this.money < amount) throw new Error("Insufficient money");

        this.money -= amount;
    }

    public revealCards() {
        return this.hand;
    }

    public giveCard(card: Card) {
        this.hand.push(card);
    }

    public bestCombination() {}

    public getUsername() {
        return this.username;
    }
}