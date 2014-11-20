window.NewsReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var feedCollection = new NewsReader.Collections.Feeds()
    var $content = $('#content')
    var router = new NewsReader.Routers.Router(feedCollection, $content);
    Backbone.history.start();
    
  }
};

$(document).ready(function(){
  NewsReader.initialize();
});
