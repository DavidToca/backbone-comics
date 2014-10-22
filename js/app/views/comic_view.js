
app.ComicsView = Backbone.View.extend({

	el: '#main_content',

	// template: _.template($('#template_comic_list').html()),

	events: {
		"click #comic_popular": "renderByPopular",
		"click #comic_searches": "renderBySearched",
		"click #comic_qualifications": "renderByQualificated",
		"click #comic_top": "renderByTop",
		"click #comic_recommended": "renderByRecommended",
		"click #comic_all": "renderAll",
	},

	initialize: function () {

	},
	renderAll: function(event){
		this.render(app.comics_collection, function(){
			var elem = $('#' + event.target.id);
			elem.addClass("active");	
		});
		
	},
	renderByPopular: function (event){
		this.render(app.comics_collection.filterByPopularity(), function(){
			var elem = $('#' + event.target.id);
			elem.addClass("active");	
		});
	},
	renderBySearched: function (event){
		this.render(app.comics_collection.filterBySearched(), function(){
			var elem = $('#' + event.target.id);
			elem.addClass("active");	
		});
	},
	renderByQualificated: function (event){
		this.render(app.comics_collection.filterByQualificated(), function(){
			var elem = $('#' + event.target.id);
			elem.addClass("active");	
		});
	},
	renderByRecommended: function (event){
		this.render(app.comics_collection.filterByRecommended(), function(){
			var elem = $('#' + event.target.id);
			elem.addClass("active");	
		});
	},
	renderByTop: function (event){
		this.render(app.comics_collection.filterByTop(), function(){
			var elem = $('#' + event.target.id);
			elem.addClass("active");	
		});
	},
	render: function (comics, callback){
		var that = this;
		// I had rather read the template and then rendered
		// than hardcoded all templates on the same html
        $.get('templates/comic_list_template.html', function (data) {
            var content = _.template(data, { comics_collection: comics } );
            that.$el.html( content );
            if(callback){
            	callback.call();
            }
        });

	},

});
