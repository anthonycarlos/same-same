describe("Pile", function() {
  var pile;

  beforeEach(function() {
    pile = Pile.create({ numOfPairs: 27 });
    pile.initialize();
  });

  describe("when initializing", function() {
    it("takes an integer", function() {
      expect(pile.get('numOfPairs')).toEqual(27);
    });

    it("instantiates pairs of cards", function() {
      expect(pile.get('cards').length).toEqual(54);
    });
  });


});
