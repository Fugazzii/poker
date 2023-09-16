export enum Suit {
    DIAMOND = "D",
    HEART = "H",
    CLUB = "C",
    SPADE = "S"
}

export enum Pip {
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
export const pips: Array<Pip> = [
    Pip.TWO,
    Pip.THREE,
    Pip.FOUR,
    Pip.FIVE,
    Pip.SIX,
    Pip.SEVEN,
    Pip.EIGHT,
    Pip.NINE,
    Pip.TEN,
    Pip.JACK,
    Pip.QUEEN,
    Pip.KING,
    Pip.ACE
];
