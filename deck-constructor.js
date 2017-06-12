class Card {
  constructor(value, name, suit) {
    this.value = value;
    this.name = name;
    this.suit = suit;
    this.fullName = `${name} of ${suit}`;
  }
}

class Deck {
  constructor(suits, values, names) {
    this.suits = suits;
    this.values = values;
    this.names = names;
    this.cards = [];
  }

  createDeck() {
    for (var i = 0; i < this.suits.length; i++) {
      for (var j = 0; j < this.values.length; j++) {
        this.cards.push(new Card(values[j], names[j], suits[i]));
      }
    }
  }

  shuffleDeck() {
    let cards = this.cards;
    for (var i = 0; i < cards.length; i++) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = cards[i];
      cards[i] = cards[j];
      cards[j] = temp;
    }
  }

  dealCards(p1, p2, p3, p4, kitty) {
    let cards = this.cards;
    let playerHandSize = 12;
    let kittySize = 4;
    for (var i = 0; i < playerHandSize; i++) {
      p1.push(cards.pop());
      p2.push(cards.pop());
      p3.push(cards.pop());
      p4.push(cards.pop());
    }
    for (var i = 0; i < kittySize; i++) {
      kitty.push(cards.pop());
    }
  }

}

class Player {
  constructor(cards) {
    this.cards = cards;
  }
}

let suits = ['Spades', 'Hearts', 'Clubs', 'Diamonds'];
let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let names = ['Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King', 'Ace'];

let myDeck = new Deck(suits, values, names);
let playerOne = new Player([]);
let playerTwo = new Player([]);
let playerThree = new Player([]);
let playerFour = new Player([]);
let kitty = [];

myDeck.createDeck();
myDeck.shuffleDeck();
// console.log(myDeck.cards);
// console.log(myDeck.cards);
myDeck.dealCards(playerOne.cards, playerTwo.cards, playerThree.cards, playerFour.cards, kitty);
// console.log(myDeck.cards);
// console.log('p1cards:', playerOne.cards);
// console.log('p2cards:', playerTwo.cards);
// console.log(playerTwo.cards.length);
// console.log(kitty);
