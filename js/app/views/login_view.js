
app.LoginView = Backbone.View.extend({

	el: '#main_content',

	// template: _.template($('#template_comic_list').html()),

	isAlfaNum: function(input){
		return input.match(/^\w+$/);
	},

	events: {
		"click #login_button"				: "login",
		'keyup .login_input.validate-text'  : "validateText",
		'blur .login_input.validate-text'  : "validateText",
	},

	initialize: function () {

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
		var submit_button = $('#login_button');

		var username = $('#form_username');
		var password = $('#form_password');

		var username_error = this.validateElementText(username);
		var password_error = this.validateElementText(password);

		if(username_error || password_error){
			submit_button.attr("disabled", "disabled");
		}
		else{
			submit_button.removeAttr("disabled");
		}

	},
	login: function () {
		var username = $('#form_username').val();
		var password = $('#form_password').val();
		var success = app.session_manager.login(username, password);
		if(success){
			window.location.hash = '';
		}
		else{
			this.render({error: 'User or password doesn\'t match.'});
			return false;
		}
	},

	render: function (options){
		var options = options || {}
		var that = this;

        $.get('templates/login_template.html', function (data) {
            var content = _.template(data, {options: options});
            that.$el.html( content );
        });

	},

});
