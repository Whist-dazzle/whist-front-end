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

}

let suits = ['Spades', 'Hearts', 'Clubs', 'Diamonds'];
let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let names = ['Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King', 'Ace'];

var myDeck = new Deck(suits, values, names);
myDeck.createDeck();
console.log(myDeck.cards);
