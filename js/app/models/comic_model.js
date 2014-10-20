app.ComicModel = Backbone.Model.extend({

	localStorage: new Backbone.LocalStorage("comics_store"),

	defaults: {
		name 		: 'default',
		cover_image 		: 'http://media-cache-ec0.pinimg.com/736x/ef/24/bf/ef24bf4883749ba791d4f06e4339b93a.jpg'
	}

});