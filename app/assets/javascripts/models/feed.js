NewsReader.Models.Feed = Backbone.Model.extend({
  urlRoot: "/api/feeds",
  
  entries: function () {
    if (!this._entries) {
      this._entries = new NewsReader.Collections.Entries({}, { feed: this })
    }
    return this._entries
  },
  
  parse: function (response, options) {

    if (response.latest_entries) {
      var latestEntries = response.latest_entries;
      this.entries().set(latestEntries, { parse: true });
      delete response.latest_entries;
    }
    return response
  }
});
