describe("Card", function() {
  var card;

  beforeEach(function() {
    card = Card.create({ value: 54 });
  });

  describe("when initializing", function() {
    it("takes an integer", function() {
      expect(card.get('value')).toEqual(54);
    });

    it("starts face-down", function() {
      expect(card.get('isFaceUp')).toBe(false);
    });
  });

  describe("when face-down", function() {
    it("when sent the show message", function() {
      expect(card.get('show')).toContain("face-down.png");
    });
  });

  describe("when face-up", function() {
    describe("when sent the show message", function() {
      it("returns its faceUpUrl", function() {
        card.toggle();
        expect(card.get('show')).toContain("54.png");
      });
    });
  });

});
