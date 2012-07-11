window.App = Em.Application.create({
  name: "Same Same"
});

App.card1 = Card.create();
App.card2 = Card.create();

App.ClickableView1 = Em.View.extend({
  click: function(evt) {
    App.card1.toggle();
  }
});
App.ClickableView2 = Em.View.extend({
  click: function(evt) {
    App.card2.toggle();
  }
});
