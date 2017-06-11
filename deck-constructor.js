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
    for (var i = 0; i < this.cards.length; i++) {
      let array = this.cards;
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

}

let suits = ['Spades', 'Hearts', 'Clubs', 'Diamonds'];
let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let names = ['Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King', 'Ace'];

var myDeck = new Deck(suits, values, names);
myDeck.createDeck();
// console.log(myDeck.cards);
myDeck.shuffleDeck(this.cards);
console.log(myDeck.cards)
