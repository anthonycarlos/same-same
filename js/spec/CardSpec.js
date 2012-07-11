describe("Card", function() {
  var card;

  it("initializes to face-down", function() {
    card = Card.create();
    expect(card.get('show')).toEqual("?");
  });

  it("reveals its value when toggled", function() {
    card = Card.create();
    card.toggle();
    expect(card.get('show')).toEqual("Ace of spades");
  });
});
