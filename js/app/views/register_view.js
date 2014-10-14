
app.RegisterView = Backbone.View.extend({

	el: '#main_content',

	// template: _.template($('#template_comic_list').html()),

	events: {
		"submit": "register",
		'click #btn_generic_login'		: 'login',
		'blur .alfanumeric_field' 		: "alfaNumberValidation",
		'blur .password' 				: "passwordValidation",
	},

	initialize: function () {

	},

	register: function () {

		var name = $('#register_name').val();
		var username = $('#register_username').val();
		var password = $('#register_password').val();

		var new_user = new app.UserModel();
		new_user.save({name: name, username: username, password: password}, {

			success: function(){
				app.session_manager.login(username, password);
				window.location.hash = 'index';
			},
			error: function(model, error){
				console.log("error");
				// console.log("error " + error);
				// return false;
				// this.render();
			}

		});

		// if (new_user.validationError){
		// 	this.render(new_user.validationError);
		// 	console.log(new_user.validationError);
		// 	return false;
		// }

	},

	render: function (errors){
		var that = this;
		// I'd rather read the template and then rendered
		// than hardcoded all templates on the same html
        $.get('templates/register_template.html', function (data) {
            var content = _.template(data);
            that.$el.html( content );
        });

	},

});
