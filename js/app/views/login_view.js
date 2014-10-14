
app.LoginView = Backbone.View.extend({

	el: '#main_content',

	// template: _.template($('#template_comic_list').html()),

	events: {
		"click #login_button": "login"
	},

	initialize: function () {

	},

	login: function () {
		var username = $('#form_username').val();
		var password = $('#form_password').val();
		var success = app.session_manager.login(username, password);
		if(success){
			window.location.hash = '';
		}
		else{
			this.render({error: true});
			return false;
		}
	},

	render: function (options){
		var options = options || {}
		var that = this;
		// I had rather read the template and then rendered
		// than hardcoded all templates on the same html
        $.get('templates/login_template.html', function (data) {
            var content = _.template(data, {options: options});
            that.$el.html( content );
        });

	},

});
