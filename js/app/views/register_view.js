
app.RegisterView = Backbone.View.extend({

	el: '#main_content',

	// template: _.template($('#template_comic_list').html()),
	isAlfaNum: function(input){
		return input.match(/^\w+$/);
	},
	events: {
		"click #register_button"	: "register",
		'keyup .register_input.validate-text'  	: "validateText",
		'blur .register_input.validate-text'  	: "validateText",
	},

	initialize: function () {

	},

	register: function () {
		console.log("calling register");
		var name = $('#register_name').val();
		var username = $('#register_username').val();
		var password = $('#register_password').val();

		var new_user = new app.UserModel();
		new_user.save({name: name, username: username, password: password}, {

			success: function(){
				app.users_collection.add(new_user);
				app.session_manager.login(username, password);
				window.location.hash = '';
			},
			error: function(model, error){
				console.log("error");
			}

		});

		if (new_user.validationError){
			this.render(new_user.validationError);
			console.log(new_user.validationError);
			// return false;
		}

	},

	validateText: function(event){
		var elem = $('#' + event.target.id);
		var elem_container = $('#' + event.target.id + "_container");
		var elem_help_text = $('#' + event.target.id + "_help");

		var error = this.validateElementText(elem);

		if(error){
           elem_container.addClass("has-error");
           elem_help_text.text(error);
		}
		else{
		    elem_container.removeClass("has-error");
			elem_help_text.text("");
		}

		this.validateButton();

	},
	validateElementText: function(element){

		var value = element.val();

        if (value === "") {
        	return "Can\'t be empty";
        }
        else if(!this.isAlfaNum(value)){
        	return "Has invalid characters";
        }

        return false;
	},

	validateButton: function(){
		var submit_button = $('#register_button');

		var user = $('#register_name');
		var username = $('#register_username');
		var password = $('#register_password');

		var user_error = this.validateElementText(user);
		var username_error = this.validateElementText(username);
		var password_error = this.validateElementText(password);

		if(username_error || password_error){
			submit_button.attr("disabled", "disabled");
		}
		else{
			submit_button.removeAttr("disabled");
		}

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
