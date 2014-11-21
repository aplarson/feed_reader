NewsReader.Routers.Router = Backbone.Router.extend({
  routes: {
    "": "feedIndex",
    "feeds/followed": "followedFeeds",
    "feeds/:id": "feedShow"
  },
  
  initialize: function(collection, $content, followedFeeds){
    this.collection = collection;
    this.$content = $content;
    this.followedFeeds = followedFeeds;
  },
  
  
  feedIndex: function () {
    this.collection.fetch()
    var view = new NewsReader.Views.FeedsIndex({collection: this.collection})
    this.$content.html(view.render().$el)
  },
  
  feedShow: function (id) {
    var feed = this.collection.getOrFetch(id);
    feed.fetch();
    var view = new NewsReader.Views.FeedsShow({ model: feed });
    this.$content.html(view.render().$el)
  },
  
  followedFeeds: function () {
    // debugger
    this.followedFeeds.fetch();
    var view = new NewsReader.Views.FollowedFeedsIndex(this.followedFeeds)
    this.$content.html(view.render().$el)
  }
});
