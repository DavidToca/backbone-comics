app.UserModel = Backbone.Model.extend({
	
	localStorage: new Backbone.LocalStorage("users_store"),

	defaults: {
		is_admin : false
	}

});