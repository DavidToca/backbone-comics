app.SessionManager = function(){

	this.isLoged = function(username, password){
		return sessionStorage.getItem('current_user') != null;
	},

	this.getCurrentUser = function(username, password){

		if( !this.isLoged()){
			return null
		}

		return sessionStorage.getItem('current_user');
	},

	this.login = function(username, password){
		if(this.isLoged()){
			// its already logged in
			return true
		}

		// check if the username and password matches
		if (app.users_collection.where({ username: username, password: password })[0]) {
			sessionStorage.setItem('current_user', 1);
			return true;
		};

		return false;
	},

	this.logout = function(){
		sessionStorage.removeItem('current_user');
		window.location.hash = 'login';
	}

};