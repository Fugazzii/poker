import { Dealer } from '.';
import { Suit, Rank } from '../Card';
import { expect, describe, test, spyOn } from 'bun:test';

// Mock Math.random to control shuffle duration
spyOn(Math, 'random').mockReturnValue(() => 0.5);

describe('Dealer', () => {
    test('should create a deck of cards when instantiated', () => {
        const dealer = new Dealer();
        expect(dealer).toBeDefined();
        expect(dealer instanceof Dealer).toBeTruthy();
        expect(dealer['deck']).toHaveLength(52);
    });

    test('should deal cards from the top of the deck', () => {
        const dealer = new Dealer();
        const card = dealer.deal();
        expect(card).toBeDefined();

        const { suit, rank } = card;

        expect(suit).toBe(Suit.SPADE);
        expect(rank).toBe(Rank.ACE);
    });

    test('should throw an error when dealing from an empty deck', () => {
        const dealer = new Dealer();
        dealer['deck'].length = 0;
        expect(() => dealer.deal()).toThrow('Empty deck');
    });

    test('should shuffle the deck', () => {
        const dealer = new Dealer();
        const originalDeck = [...dealer["deck"]];
        dealer.shuffle();
        expect(dealer["deck"].length).toBe(originalDeck.length);
        let atLeastOneCardDifferent = false;

        for (let i = 0; i < originalDeck.length; i++) {
            if (originalDeck[i] !== dealer["deck"][i]) {
                atLeastOneCardDifferent = true;
                break;
            }
        }

        expect(atLeastOneCardDifferent).toBe(true);
    });
});
