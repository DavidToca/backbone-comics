
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

		$("#current_user").html(app.session_manager.getCurrentUser().get("username") + '<b class="caret"></b>');

		if(app.session_manager.getCurrentUser().get("is_admin")){
			var admin_actions = $('.admin_action');
			admin_actions.css("visibility", "visible");
		}

	},

	unrender: function (options){
		var options = options || {};
		var that = this;

		var header = $('#base_header');
		var footer = $('#base_footer');
		var admin_actions = $('.admin_action');
		header.css( "visibility", "hidden" );
		footer.css( "visibility", "hidden" );

		admin_actions.css("visibility", "hidden");
	},

});
