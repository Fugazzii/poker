import { Rank, Suit } from ".";

export class Card {
    public constructor(
        public readonly suit: Suit,
        public readonly rank: Rank
    ) {}
}