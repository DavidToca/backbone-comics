
app.ComicsView = Backbone.View.extend({

	el: '#main_content',

	template: _.template($('#comic_list_template').html()),

	events: {
		"click #comic_popular": "renderByPopular",
		"click #comic_searches": "renderBySearched",
		"click #comic_qualifications": "renderByQualificated",
		"click #comic_top": "renderByTop",
		"click #comic_recommended": "renderByRecommended",
		"click #comic_all": "renderAll",
		// "mouseover .comic_image": "showDetail"
	},

	initialize: function () {

	},
	showDetail: function(event){
		console.log('show detail');


	},	renderAll: function(event){
		var options = {comics_collection: app.comics_collection}
		this.render(options, function(){
			var elem = $('#' + event.target.id);
			elem.addClass("active");	
		});
		
	},
	renderByPopular: function (event){
		var options = {comics_collection: app.comics_collection.filterByPopularity()}
		this.render(options, function(){
			var elem = $('#' + event.target.id);
			elem.addClass("active");	
		});
	},
	renderBySearched: function (event){
		var options = {comics_collection: app.comics_collection.filterBySearched()}
		this.render(options, function(){
			var elem = $('#' + event.target.id);
			elem.addClass("active");	
		});
	},
	renderByQualificated: function (event){
		var options = {comics_collection: app.comics_collection.filterByQualificated()}
		this.render(options, function(){
			var elem = $('#' + event.target.id);
			elem.addClass("active");	
		});
	},
	renderByRecommended: function (event){
		var options = {comics_collection: app.comics_collection.filterByRecommended()}

		this.render(options, function(){
			var elem = $('#' + event.target.id);
			elem.addClass("active");	
		});
	},
	renderByTop: function (event){
		var options = {comics_collection: app.comics_collection.filterByTop()}
		this.render(options, function(){
			var elem = $('#' + event.target.id);
			elem.addClass("active");	
		});
	},

	render: function (options, callback){
		var that = this;
		if (!_.has(options, 'hide_sidebar')) {
			options.hide_sidebar = false;
		};

		var content = this.template(options);
		
		that.$el.html( content );

		// Add fade
		$('.comic_image').hover(
		    function(event) {
		    	var comic_data = $("#" + event.target.id + "_data");
		        $(this).stop().animate({opacity: "0.3", duration: 'fast'}, function(){comic_data.css('display', 'inherit');});
		        
		    },
		    function() {
		    	var comic_data = $("#" + event.target.id + "_data");
		        $(this).stop().animate({opacity: "1"});
		        comic_data.css('display', 'none');
		    }
		);

        if(callback){
        	callback.call();
        }

	},

});
