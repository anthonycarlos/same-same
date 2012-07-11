window.App = Em.Application.create({
  name: "Same Same"
});

App.card1 = Card.create({ value: 1 });
App.card2 = Card.create({ value: 2 });
App.card3 = Card.create({ value: 3 });
App.card4 = Card.create({ value: 2 });
App.card5 = Card.create({ value: 3 });
App.card6 = Card.create({ value: 1 });

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
App.ClickableView3 = Em.View.extend({
  click: function(evt) {
    App.card3.toggle();
  }
});
App.ClickableView4 = Em.View.extend({
  click: function(evt) {
    App.card4.toggle();
  }
});
App.ClickableView5 = Em.View.extend({
  click: function(evt) {
    App.card5.toggle();
  }
});
App.ClickableView6 = Em.View.extend({
  click: function(evt) {
    App.card6.toggle();
  }
});
