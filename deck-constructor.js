class Card {
  constructor(value, name, suit, suitNum) {
    this.value = value;
    this.name = name;
    this.suit = suit;
    this.suitNum = suitNum;
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
        this.cards.push(new Card(values[j], names[j], suits[i], suitNums[i]));
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

  sortCards() {
    let cards = this.cards;

    function compare(x, y){
      return x > y ? 1 : x < y ? -1 : 0;
    };

    cards.sort(function(a, b){
      //note the minus before -cmp, for descending order
      return compare(
        [compare(a.suitNum, b.suitNum), -compare(a.value, b.value)],
        [compare(b.suitNum, a.suitNum), -compare(b.value, a.value)]
      );
    });
  }
}

// class Game {
//   constructor(players) {
//     this.players = players;
//   }
// }

let suits = ['Spades', 'Hearts', 'Clubs', 'Diamonds'];
let suitNums = [1, 2, 3, 4];
let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let names = ['Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King', 'Ace'];

let myDeck = new Deck(suits, values, names);
let p1 = new Player([]);
let p2 = new Player([]);
let p3 = new Player([]);
let p4 = new Player([]);
let players = [p1, p2, p3, p4];
// let game = new Game(players);
let kitty = [];

myDeck.createDeck();
myDeck.shuffleDeck();
myDeck.dealCards(p1.cards, p2.cards, p3.cards, p4.cards, kitty);

//Sort cards for all players
players.forEach(function(player) {
  player.sortCards();
});

// let p1 = game.players[0];
// let p2 = game.players[1];
// let p3 = game.players[2];
// let p4 = game.players[3];

console.log('P1CARDS-SORTED:', p1.cards);
// console.log('P2CARDS-SORTED:', p2.cards);
