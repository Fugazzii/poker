export enum Suit {
    DIAMOND = "D",
    HEART = "H",
    CLUB = "C",
    SPADE = "S"
}

export enum Rank {
    TWO = 2,
    THREE = 3,
    FOUR = 4,
    FIVE = 5,
    SIX = 6,
    SEVEN = 7,
    EIGHT = 8,
    NINE = 9,
    TEN = 10,
    JACK = "J",
    QUEEN = "Q",
    KING = "K",
    ACE = "A"
}

export const suits: Array<Suit> = [Suit.DIAMOND, Suit.HEART, Suit.CLUB, Suit.SPADE];
export const pips: Array<Rank> = [
    Rank.TWO,
    Rank.THREE,
    Rank.FOUR,
    Rank.FIVE,
    Rank.SIX,
    Rank.SEVEN,
    Rank.EIGHT,
    Rank.NINE,
    Rank.TEN,
    Rank.JACK,
    Rank.QUEEN,
    Rank.KING,
    Rank.ACE
];
