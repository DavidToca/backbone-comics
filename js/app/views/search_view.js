
app.SearchView = Backbone.View.extend({

	el: '#main_content',

	template: _.template($('#search_template').html()),

	events: {
		'click .search-option': 'searchFilter',
		'click #button_search': 'search',
		'keyup #search_term': 'keySearch'
	},

	initialize: function () {

	},
	search: function(){
		var comic_view = this.getComicView();
		var search_term = $('#search_term').val();

		if(_.isEmpty(search_term)){
			search_term = '.*';
		}
		console.log('search_term is ' + search_term);
		var search_param = $('#search_param').val();

		console.log('search_param is ' + search_param);

		comic_view.render({comics_collection: app.comics_collection.searchBy(search_term, search_param), hide_sidebar: true});
	},
	searchBy: function(options){
		
	},
	keySearch: function(event){
		if(event.keyCode === 13){
			this.search();
		}
	},
	searchFilter: function(event){
		event.preventDefault();

		var elem = $('#' + event.target.id);
		var search_concept = $('#search_concept');
		var new_text = elem.html();
		if(event.target.id === 'serch_all'){
			new_text = 'Search by';
		}

		var search_param = $('#search_param');
		search_param.val(event.target.id);
		search_concept.html(new_text);
	},
	getComicView: function(){
		if(this.comic_view === undefined){
			this.comic_view = new app.ComicsView({el: '#search_result'});
			return this.comic_view;
		}

		return this.comic_view;
	},
	render: function (comics, callback){
		var that = this;

		var content = this.template({comics_collection: comics});

		that.$el.html( content );

		var comic_view = this.getComicView();
		
		comic_view.render({comics_collection: new app.ComicsCollection(), hide_sidebar: true});

        if(callback){
        	callback.call();
        }

	},

});
