
app.ComicsCollection = Backbone.Collection.extend({

	model: app.comicsModel,
    localStorage: new Backbone.LocalStorage("comics_store"),

    filterByLoaned: function(isLoaned){

		filtered = this.filter(function(comic) {
			return comic.get("loaned");
		});

		return (new app.ComicsCollection(filtered));
	}

});