
app.GenderView = Backbone.View.extend({

	el: '#main_content',

	// template: _.template($('#template_comic_list').html()),

	initialize: function () {

	},

	render: function (comics, callback){
		var that = this;
		// I had rather read the template and then rendered
		// than hardcoded all templates on the same html
        $.get('templates/genres.html', function (data) {
            var content = _.template(data, { comics_collection: comics } );
            that.$el.html( content );
            if(callback){
            	callback.call();
            }
        });

	},

});
