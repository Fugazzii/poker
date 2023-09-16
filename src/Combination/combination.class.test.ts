import { Card, Rank, Suit } from '../Card';
import { describe, test, expect, beforeEach } from 'bun:test';
import { Combination, CombinationHandler } from '.';

describe('CombinationHandler', () => {
    let combinationHandler: CombinationHandler;

    beforeEach(() => {
        combinationHandler = new CombinationHandler();
    });

    test('should evaluate a Royal Flush correctly', () => {
        const hand: Card[] = [
            { suit: Suit.SPADE, rank: Rank.ACE },
            { suit: Suit.SPADE, rank: Rank.KING },
            { suit: Suit.SPADE, rank: Rank.QUEEN },
            { suit: Suit.SPADE, rank: Rank.JACK },
            { suit: Suit.SPADE, rank: Rank.TEN }
        ];

        const result = combinationHandler.countBestCombination({ cardsOnBoard: [], playerHand: hand });

        expect(result).toEqual(Combination.ROYAL_FLUSH);
    });

    test('should evaluate a Straight Flush correctly', () => {
        const hand: Card[] = [
            { suit: Suit.HEART, rank: Rank.SEVEN },
            { suit: Suit.HEART, rank: Rank.EIGHT },
            { suit: Suit.HEART, rank: Rank.NINE },
            { suit: Suit.HEART, rank: Rank.TEN },
            { suit: Suit.HEART, rank: Rank.JACK },
        ];

        const result = combinationHandler.countBestCombination({ cardsOnBoard: [], playerHand: hand });

        expect(result).toEqual(Combination.STRAIGHT_FLUSH);
    });

    test('should evaluate a Four of a Kind correctly', () => {
        const hand: Card[] = [
            { suit: Suit.CLUB, rank: Rank.SEVEN },
            { suit: Suit.DIAMOND, rank: Rank.SEVEN },
            { suit: Suit.HEART, rank: Rank.SEVEN },
            { suit: Suit.SPADE, rank: Rank.SEVEN },
            { suit: Suit.CLUB, rank: Rank.KING }
        ];

        const result = combinationHandler.countBestCombination({ cardsOnBoard: [], playerHand: hand });

        expect(result).toEqual(Combination.FOUR_OF_A_KIND);
    });

    test('should evaluate a Full House correctly', () => {
        const hand: Card[] = [
            { suit: Suit.CLUB, rank: Rank.SEVEN },
            { suit: Suit.DIAMOND, rank: Rank.SEVEN },
            { suit: Suit.HEART, rank: Rank.SEVEN },
            { suit: Suit.SPADE, rank: Rank.KING },
            { suit: Suit.CLUB, rank: Rank.KING }
        ];

        const result = combinationHandler.countBestCombination({ cardsOnBoard: [], playerHand: hand });

        expect(result).toEqual(Combination.FULL_HOUSE);
    });

    test('should evaluate a Flush correctly', () => {
        const hand: Card[] = [
            { suit: Suit.DIAMOND, rank: Rank.TWO },
            { suit: Suit.DIAMOND, rank: Rank.JACK },
            { suit: Suit.DIAMOND, rank: Rank.QUEEN },
            { suit: Suit.DIAMOND, rank: Rank.KING },
            { suit: Suit.DIAMOND, rank: Rank.ACE }
        ];

        const result = combinationHandler.countBestCombination({ cardsOnBoard: [], playerHand: hand });

        expect(result).toEqual(Combination.FLUSH);
    });

    test('should evaluate a Straight correctly', () => {
        const hand: Card[] = [
            { suit: Suit.HEART, rank: Rank.SEVEN },
            { suit: Suit.CLUB, rank: Rank.EIGHT },
            { suit: Suit.SPADE, rank: Rank.NINE },
            { suit: Suit.DIAMOND, rank: Rank.TEN },
            { suit: Suit.HEART, rank: Rank.JACK }
        ];

        const result = combinationHandler.countBestCombination({ cardsOnBoard: [], playerHand: hand });

        expect(result).toEqual(Combination.STRAIGHT);
    });

    test('should evaluate a Three of a Kind correctly', () => {
        const hand: Card[] = [
            { suit: Suit.CLUB, rank: Rank.SEVEN },
            { suit: Suit.DIAMOND, rank: Rank.SEVEN },
            { suit: Suit.HEART, rank: Rank.SEVEN },
            { suit: Suit.SPADE, rank: Rank.ACE },
            { suit: Suit.CLUB, rank: Rank.KING }
        ];

        const result = combinationHandler.countBestCombination({ cardsOnBoard: [], playerHand: hand });

        expect(result).toEqual(Combination.THREE_OF_A_KIND);
    });

    test('should evaluate a Two Pair correctly', () => {
        const hand: Card[] = [
            { suit: Suit.CLUB, rank: Rank.SEVEN },
            { suit: Suit.DIAMOND, rank: Rank.SEVEN },
            { suit: Suit.HEART, rank: Rank.KING },
            { suit: Suit.SPADE, rank: Rank.KING },
            { suit: Suit.CLUB, rank: Rank.TEN }
        ];

        const result = combinationHandler.countBestCombination({ cardsOnBoard: [], playerHand: hand });

        expect(result).toEqual(Combination.TWO_PAIR);
    });
   
});
