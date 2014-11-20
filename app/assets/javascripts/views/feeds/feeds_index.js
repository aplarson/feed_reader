NewsReader.Views.FeedsIndex = Backbone.View.extend({

  template: JST['feeds/index'],
  
  initialize: function(){
    this.listenTo(this.collection, 'sync remove add', this.render)
  },
  
  events: {
    "click button.delete": "deleteFeed",
    "submit #new-feed-form": "createFeed"
  },
  
  render: function () {
    var content = this.template({ feeds: this.collection })
    this.$el.html(content)
    return this
  },
  
  deleteFeed: function(event){
    var feedId = $(event.currentTarget).data("id");
    var feed = this.collection.get(feedId);
    feed.destroy();
  },
  
  createFeed: function (event) {
    event.preventDefault();
    var params = $(event.currentTarget).serializeJSON();
    var model = new NewsReader.Models.Feed(params["feed"]);
    model.save([], {
      success: function () {
        this.collection.add(model);
      }.bind(this)
    })
  }

});
