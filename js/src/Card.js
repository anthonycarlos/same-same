Card = Em.Object.extend({
  value: undefined,
  isFaceUp: false,
  toggle: function() {
    if (this.get('isFaceUp')) {
      this.set('isFaceUp', false);
    } else {
      this.set('isFaceUp', true);
    }
  },
  faceDownUrl: "img/face-down.png",
  faceUpUrl: function() {
    return "img/" + this.get('value') + ".png"
  }.property('value'),
  show: function() {
    if (this.get('isFaceUp')) {
      return this.get('faceUpUrl');
    } else {
      return this.get('faceDownUrl');
    }
  }.property('value', 'isFaceUp')
});
