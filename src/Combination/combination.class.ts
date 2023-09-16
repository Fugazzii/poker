import { Combination } from ".";
import { Card, Rank, Suit } from "../Card";

type ICombination = {
    cardsOnBoard: Array<Card>,
    playerHand: Array<Card>
}

type CardMaps = {
    suits: Map<Suit, number>,
    ranks: Map<Rank, number>
}

export class CombinationHandler {
    
    private maps: CardMaps;

    public constructor() {
        this.maps = { suits: new Map(), ranks: new Map() };
    }

    public countBestCombination({ cardsOnBoard, playerHand }: ICombination) {
        let fullHand = cardsOnBoard.concat(playerHand);

        this.maps = this._buildMaps(fullHand); 

        return this._evaluate();
    }

    private _buildMaps(hand: Array<Card>): CardMaps {
        let suits = new Map<Suit, number>();
        let ranks = new Map<Rank, number>();

        for(let card of hand) {
            let { suit, rank } = card;

            let currentSuitsCount = suits.get(suit) || 0;
            let currentRanksCount = ranks.get(rank) || 0;
                        
            suits.set(suit, currentSuitsCount + 1);
            ranks.set(rank, currentRanksCount + 1);
        }

        return { suits, ranks };
    }

    private _evaluate(): Combination {
        return this._checkRoyalFlush();
    }

    /** */
    /** Combination checkers */
    /** */

    private _checkRoyalFlush(): Combination {
        let isRoyalFlush = this._isFlush() && this._isStraight() && this.maps.ranks.has(Rank.ACE);

        return isRoyalFlush ? Combination.ROYAL_FLUSH : this._checkStraightFlush();
    }

    private _checkStraightFlush(): Combination {
        let isStraightFlush = this._isFlush() && this._isStraight();

        return isStraightFlush ? Combination.STRAIGHT_FLUSH : this._checkFourOfAKind();
    }

    private _checkFourOfAKind(): Combination {
        let isFourOfAKind = this._isNOfAKind(4);
        
        return isFourOfAKind ? Combination.FOUR_OF_A_KIND : this._checkFullHouse();
    }
    
    private _checkFullHouse(): Combination {
        let isFullHouse = this._isNOfAKind(3) && this._isNOfAKind(2);

        return isFullHouse ? Combination.FULL_HOUSE : this._checkFlush();
    }

    private _checkFlush(): Combination {
        let isFlush = this._isFlush();

        return isFlush ? Combination.FLUSH : this._checkStraight();
    }

    private _checkStraight(): Combination {
        let isStraight = this._isStraight();

        return isStraight ? Combination.STRAIGHT : this._checkThreeOfAKind();
    }

    private _checkThreeOfAKind(): Combination {
        let isThreeOfAKind = this._isNOfAKind(3);

        return isThreeOfAKind ? Combination.THREE_OF_A_KIND : this._checkTwoPair();
    }

    private _checkTwoPair(): Combination {
        let isTwoPair = this._isNOfAKind(2);

        return isTwoPair ? Combination.TWO_PAIR : Combination.NONE;
    }


    /** */
    /** Reusable Combinations */
    /** */

    private _isNOfAKind(n: number): boolean {
        for(let entry of this.maps.ranks.entries()) {
            if(entry[1] === n) return true;
        }
        return false;
    }

    private _isFlush(): boolean {
        for(let entry of this.maps.suits.entries()) {
            if(entry[1] === 5) return true;
        }
        return false;
    }

    private _isStraight(): boolean {
        const rankValues = Array.from(this.maps.ranks.keys()).map((rank) => rank.valueOf());
        const sortedRankValues = rankValues.sort((a, b) => a - b);
    
        for (let i = 0; i < sortedRankValues.length - 4; i++) {
            if (sortedRankValues[i] + 4 === sortedRankValues[i + 4]) {
                return true;
            }
        }
    
        return false;
    }
    

}