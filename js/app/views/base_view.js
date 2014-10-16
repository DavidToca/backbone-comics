
app.BaseView = Backbone.View.extend({

	initialize: function () {

	},

	render: function (options){
		var options = options || {};
		var that = this;

		var header = $('#base_header');
		var footer = $('#base_footer');

		header.css( "visibility", "visible" );
		footer.css( "visibility", "visible" );
	},

	unrender: function (options){
		var options = options || {};
		var that = this;

		var header = $('#base_header');
		var footer = $('#base_footer');

		header.css( "visibility", "hidden" );
		footer.css( "visibility", "hidden" );
	},

});
