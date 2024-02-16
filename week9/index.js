// Enum for suits and values
const SUITS = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
}

class Deck {
    constructor() {
        this.cards = [];
        // Initialize the deck with 52 cards
        for (let suit of SUITS) {
            for (let value of VALUES) {
                this.cards.push(new Card(suit, value));
            }
        }
    }

    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    dealCard() {
        return this.cards.pop();
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }

    addCardToHand(card) {
        this.hand.push(card);
    }

    playCard() {
        return this.hand.pop();
    }
}

// Initialize the game
const player1 = new Player('Player 1');
const player2 = new Player('Player 2');
const deck = new Deck();
deck.shuffle();

// Deal cards to players
for (let i = 0; i < 26; i++) {
    player1.addCardToHand(deck.dealCard());
    player2.addCardToHand(deck.dealCard());
}

// Play the game
let round = 1;
let score1 = 0;
let score2 = 0;

while (player1.hand.length > 0 && player2.hand.length > 0) {
    console.log(`Round ${round}`);
    const card1 = player1.playCard();
    const card2 = player2.playCard();

    console.log(`${player1.name} plays: ${card1.value} of ${card1.suit}`);
    console.log(`${player2.name} plays: ${card2.value} of ${card2.suit}`);

    // Determine the winner of the round
    let winner = null;
    if (VALUES.indexOf(card1.value) > VALUES.indexOf(card2.value)) {
        winner = player1;
        score1++;
    } else if (VALUES.indexOf(card1.value) < VALUES.indexOf(card2.value)) {
        winner = player2;
        score2++;
    }

    if (winner) {
        console.log(`${winner.name} wins the round`);
    } else {
        console.log('It\'s a tie!');
    }

    round++;
}

// Display the final score and declare the winner
console.log(`Final Score:`);
console.log(`${player1.name}: ${score1} points`);
console.log(`${player2.name}: ${score2} points`);
if (score1 > score2) {
    console.log(`${player1.name} wins the game!`);
} else if (score1 < score2) {
    console.log(`${player2.name} wins the game!`);
} else {
    console.log('It\'s a tie!');
}