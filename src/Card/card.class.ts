import { Rank, Suit } from ".";

export class Card {
    public constructor(
        private readonly suit: Suit,
        private readonly rank: Rank
    ) {}

    public getCard() {
        return { 
            suit: this.suit,
            rank: this.rank 
        };
    }
}