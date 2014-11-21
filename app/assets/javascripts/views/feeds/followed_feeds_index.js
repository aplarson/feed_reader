NewsReader.Views.FollowedFeedsIndex = Backbone.View.extend({
  template: JST["feeds/followed"],
  
  initialize: function(collection){
    this.collection = collection
    this.listenTo(this.collection, 'sync remove', this.render)
  },
  
  events: {
    "click button.unfollow":"unfollow"
  },
  
  render: function(){
    var content = this.template({ feeds: this.collection });
    this.$el.html(content);
    return this;
  },
  
  unfollow: function() {
    debugger
    var model = $(event.currentTarget)
    var feed_id = $(event.currentTarget).data('id')
    $.ajax({
      url: "api/feeds/" + feed_id + "/follows/destroy",
      method: "delete",
      success: function () {
        this.collection.remove(model)
      }
    })
  }

})