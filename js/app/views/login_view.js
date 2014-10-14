
app.LoginView = Backbone.View.extend({

	el: '#main_content',

	// template: _.template($('#template_comic_list').html()),

	events: {
		"submit": "login"
	},

	initialize: function () {

	},

	login: function () {

		var username = $('#form_username').val();
		var password = $('#form_password').val();
		var success = app.session_manager.login(username, password);
		if(success){
			window.location.hash = 'index';
		}
		else{
			this.render();
		}
	},

	render: function (comics){
		var that = this;
		// I had rather read the template and then rendered
		// than hardcoded all templates on the same html
        $.get('templates/login_template.html', function (data) {
            var content = _.template(data);
            that.$el.html( content );
        });

	},

});
