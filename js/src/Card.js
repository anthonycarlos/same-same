Card = Em.Object.extend({
  value: "img/01.png",
  isFaceUp: false,
  toggle: function() {
    if (this.get('isFaceUp')) {
      this.set('isFaceUp', false);
    } else {
      this.set('isFaceUp', true);
    }
  },
  show: function() {
    if (this.get('isFaceUp')) {
      return this.get('value');
    } else {
      return "img/face-down.png";
    }
  }.property('value', 'isFaceUp')
});
