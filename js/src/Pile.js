Pile = Em.Object.extend({
  numOfPairs: undefined,
  cards: [],
  initialize: function() {
    var arrayOfCards = [];
    var card;
    for(var i=1; i <= this.get('numOfPairs'); i++) {
      card = Card.create({ value: i });
      arrayOfCards.push(card);
      card = Card.create({ value: i });
      arrayOfCards.push(card);
    }
    this.set('cards', arrayOfCards);
  }
});
