
app.ComicsView = Backbone.View.extend({

	el: '#main_content',

	// template: _.template($('#template_comic_list').html()),

	events: {
	},

	initialize: function () {

	},

	render: function (comics){
		var that = this;
		// I had rather read the template and then rendered
		// than hardcoded all templates on the same html
        $.get('templates/comic_list_template.html', function (data) {
            var content = _.template(data, { comics_collection: comics.toJSON() } );
            that.$el.html( content );
        });

	},

});
