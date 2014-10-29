
app.ComicsCollection = Backbone.Collection.extend({

	model: app.ComicModel,
    localStorage: new Backbone.LocalStorage("comics_store"),

	filterBy: function(term){

		filtered = this.filter(function(comic) {
			return comic.get(term);
		});

		return (new app.ComicsCollection(filtered));
	},

	searchBy: function(term, param){

		search_results = this.filter(function(comic) {
			var matched = false;

			if(param === 'search_all'){
				_.each(comic.getSearchAttributes(), function(value, key){
					if(typeof value === 'string' && value.match(term)){
						matched = true;
						return;
					}
				});				
			}
			else{
				var search_attr = param.replace('search_', '');
				
				matched = comic.get(search_attr).match(term);
			}

			return matched;
		});

		return (new app.ComicsCollection(search_results));
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