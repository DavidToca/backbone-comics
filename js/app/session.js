app.SessionManager = function(){

	this.isLoged = function(username, password){
		return sessionStorage.getItem('current_user') != null;
	},

	this.getCurrentUser = function(){

		if( !this.isLoged()){
			return null;
		}

		var user_id = sessionStorage.getItem('current_user');

		var user = app.users_collection.where({ id: user_id })[0];

		return user;
	},

	this.login = function(username, password){
		if(this.isLoged()){
			// its already logged in
			return true
		}
		// check if the username and password matches
		if (app.users_collection.where({ username: username, password: password })[0]) {
			debugger;
			var current_user = app.users_collection.where({ username: username, password: password })[0];
			sessionStorage.setItem('current_user', current_user.get("id"));
			return true;
		};

		return false;
	},

	this.logout = function(){
		sessionStorage.removeItem('current_user');
		//FIXME
		app.base_view.unrender();
		window.location.hash = 'login';
	}

};