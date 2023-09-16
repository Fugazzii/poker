import { Card } from "../Card";
import { suits, pips } from "../Card";

export class Dealer {
    
    private readonly deck: Array<Card>

    public constructor() {
        this.deck = this._takeCards();
    }

    /** Deal card from top of the deck */
    public deal(): Card {
        const card: Card | undefined = this.deck.pop();

        if(card === undefined) throw new Error("Empty deck");

        return card;
    }

    /**
     * Let's change order of cards in array
     * So that dealt card should be the top of deck
     * We won't have to use .remove() method that has time complexity: O(n)
     * Instead we will use .pop() method with time complexity of O(1)
     * Also it would me more realistic to deal top card (last in arra) 
     */
    public shuffle(): void {
        const deckSize = this.deck.length;

        // Perform Fisher-Yates shuffle in-place
        for (let i = deckSize - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));    
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    }

    /** Take all cards with static order */
    private _takeCards(): Array<Card> {
        let result = new Array<Card>();
        for(let suit of suits) {
            for(let pip of pips) {
                let card = new Card(suit, pip);
                result.push(card);
            }
        }
        return result;
    }
}