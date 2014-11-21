window.NewsReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var feedCollection = new NewsReader.Collections.Feeds()
    var followedFeeds = new NewsReader.Collections.Feeds({}, { 
        url: '/api/feeds/followed'
    })
    var $content = $('#content')
    var router = new NewsReader.Routers.Router(feedCollection, 
        $content, 
        followedFeeds);
    Backbone.history.start();
    
  }
};

$(document).ready(function(){
  NewsReader.initialize();
});
