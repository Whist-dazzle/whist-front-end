# Whist Dazzle Front-End

Whist Dazzle is a web-application that let's users play the card game Whist together online.

## Ideas/Notes

We can use OOP/classes or simply js objects to represent each card and keep track of its value

* Cards will have a base value that is independent of suit and determined by their number
* Value will change based on Trump suit call
* Value will change based on High/Low call

```js
//Constructor function for Card
function Card(value, name, suit) {
  this.value = value,
  this.name = name,
  this.suit = suit,
  this.fullName = `${name} of ${suit}`
}
```

## Rules

### Betting

### Basic Play
