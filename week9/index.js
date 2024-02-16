class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
}

class Deck {
    constructor() {
        this.cards = [];
        this.createDeck();
        this.shuffle();
    }

    createDeck() {
        const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
        const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

        for (const suit of suits) {
            for (const value of values) {
                this.cards.push(new Card(suit, value));
            }
        }
    }

    shuffle() {
        // Implement shuffle algorithm
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

    playCard() {
        return this.hand.pop();
    }
}

class Game {
    constructor() {
        this.deck = new Deck();
        this.players = [new Player('Player 1'), new Player('Player 2')];
        this.score = [0, 0];
    }

    play() {
        this.dealCards();

        while (this.players[0].hand.length > 0) {
            this.playRound();
        }

        this.displayResult();
    }

    dealCards() {
        for (let i = 0; i < 26; i++) {
            for (const player of this.players) {
                player.hand.push(this.deck.dealCard());
            }
        }
    }

    playRound() {
        const card1 = this.players[0].playCard();
        const card2 = this.players[1].playCard();

        if (card1.value > card2.value) {
            this.score[0]++;
        } else if (card1.value < card2.value) {
            this.score[1]++;
        }
    }

    displayResult() {
        console.log(`Player 1 score: ${this.score[0]}`);
        console.log(`Player 2 score: ${this.score[1]}`);

        if (this.score[0] > this.score[1]) {
            console.log('Player 1 wins!');
        } else if (this.score[0] < this.score[1]) {
            console.log('Player 2 wins!');
        } else {
            console.log('It\'s a tie!');
        }
    }
}

const game = new Game();
game.play();
