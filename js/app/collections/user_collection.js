
app.UsersCollection = Backbone.Collection.extend({

	model: app.UserModel,
    localStorage: new Backbone.LocalStorage("users_store"),

    filterByLoaned: function(isLoaned){

		filtered = this.filter(function(comic) {
			return comic.get("loaned");
		});

		return (new app.ComicsCollection(filtered));
	}

});