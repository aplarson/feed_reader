NewsReader.Views.EntriesItem = Backbone.View.extend({

  template: JST['entries/_entry'],
  
  initialize: function (entry) {
    this.entry = entry;
    this.$el = $('<li>');
  },
  
  render: function () {
    var content = this.template({ entry: this.entry })
    this.$el.html(content);
    return this;
  }

});
