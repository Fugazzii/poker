import { Card } from "../Card";

export class Player {

    private readonly hand: Array<Card>;

    public constructor(
        private money: number
    ) {
        this.hand = new Array<Card>();
    }

    public bet(amount: number) {
        if(this.money < amount) throw new Error("Insufficient money");

        this.money -= amount;
    }

    public revealCards() {
        return this.hand;
    }

    public receiveCard(cards: Array<Card>) {
        cards.forEach(card => this.hand.push(card));
    }

    public bestCombination() {}
}