app.ComicModel = Backbone.Model.extend({

	localStorage: new Backbone.LocalStorage("comics_store"),

	defaults: {
		name 		: 'default',
		cover_image 		: 'images/comic_1.jpg',
		edition: 'unknown',
		characters: 'none',
		summary: 'no summary'
	},
	getSearchAttributes: function(){
		// Remove summary and image_cover from search attributes
		var new_attributes = _.without(this.attributes, this.get('summary'), this.get('cover_image'));
		console.log(new_attributes)
		return new_attributes;
	}

});