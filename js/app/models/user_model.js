app.UserModel = Backbone.Model.extend({
	
	localStorage: new Backbone.LocalStorage("users_store"),

	// isAlfaNum: function(input){
	// 	return input.match(/^\w+$/);
	// },

    validate: function (attrs) {

	   var errors = [];

	    if (!attrs.name) {
	        errors.push({name: 'name', message: 'Please fill name field.'});
	    }
	  //   else if(!this.isAlfaNum(attrs.name)){
			// errors.push({name: 'name', message: 'Please put a valid name.'});
	  //   }
	  //   if (!attrs.username) {
	  //       errors.push({username: 'username', message: 'Please fill username field.'});
	  //   }
	  //   else if(!this.isAlfaNum(attrs.username)){
			// errors.push({username: 'username', message: 'Please put a valid username.'});
	  //   }
	  //   if (!attrs.password) {
	  //       errors.push({password: 'password', message: 'Please fill password field.'});
	  //   }
	  //   else if(!this.isAlfaNum(attrs.password)){
			// errors.push({password: 'password', message: 'Please put a valid password.'});
	  //   }
	  //   else if(attrs.password.length < 6){
	  //   	errors.push({password: 'password', message: 'Minimum length is 7.'});	
	  //   }

	    return errors.length > 0 ? errors : false;
	}

});