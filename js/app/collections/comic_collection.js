
app.ComicsCollection = Backbone.Collection.extend({

	model: app.ComicModel,
    localStorage: new Backbone.LocalStorage("comics_store"),

	filterBy: function(term){

		filtered = this.filter(function(comic) {
			return comic.get(term);
		});

		return (new app.ComicsCollection(filtered));
	},
    filterByLoaned: function(isLoaned){
    	return this.filterBy("loaned");
	},
    filterByPopularity: function(){
    	return this.filterBy("popular");
	},

    filterBySearched: function(){
    	return this.filterBy("searched");
	},

	filterByQualificated: function(){
		return this.filterBy("qualificated");
	},
	filterByRecommended: function(){
		return this.filterBy("recommended");
	},
	filterByTop: function(){
		return this.filterBy("top");
	},
});