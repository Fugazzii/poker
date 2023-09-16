import { Pip, Suit } from ".";

export class Card {
    public constructor(
        private readonly suit: Suit,
        private readonly pip: Pip
    ) {}

    public getCard() {
        return { 
            suit: this.suit,
            pip: this.pip 
        };
    }
}