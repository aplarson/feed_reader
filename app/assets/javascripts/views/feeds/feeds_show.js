NewsReader.Views.FeedsShow = Backbone.View.extend({

  template: JST['feeds/show'],
  
  initialize: function(options){
    this.model = options.model;
    this.listenTo(this.model, 'sync', this.render);
  },
  
  events: {
    "click .refresh": "refresh"
  },
  
  render: function () {
    var content = this.template({ feed: this.model });
    this.$el.html(content);
    this.model.entries().forEach(function (entry) {
      var view = new NewsReader.Views.EntriesItem(entry)
      this.$('.entries-list').append(view.render().$el)
    })
    return this;
  },
  
  refresh: function () {
    this.model.fetch();
  }

});
