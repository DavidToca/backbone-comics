
app.SearchView = Backbone.View.extend({

	el: '#main_content',

	template: _.template($('#search_template').html()),

	events: {
		'click .search-option': 'searchFilter',
		'click button': 'search'
	},

	initialize: function () {

	},
	search: function(options){
		
	},
	searchBy: function(options){
		
	},
	searchFilter: function(event){
		event.preventDefault();

		var elem = $('#' + event.target.id);
		var search_concept = $('#search_concept');
		var new_text = elem.html();
		if(event.target.id === 'serch_all'){
			new_text = 'Search by';
		}

		search_concept.html(new_text);
	},
	render: function (comics, callback){
		var that = this;

		var content = this.template({comics_collection: comics});

		that.$el.html( content );
		this.comic_view = new app.ComicsView({el: '#search_result'});
		debugger;
		this.comic_view.render({comics_collection: app.comics_collection, hide_sidebar: true});

        if(callback){
        	callback.call();
        }

	},

});
