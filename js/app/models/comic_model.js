app.ComicModel = Backbone.Model.extend({

	localStorage: new Backbone.LocalStorage("comics_store"),

	defaults: {
		name 		: 'default',
		cover_image 		: 'images/comic_1.jpg'
	}

});