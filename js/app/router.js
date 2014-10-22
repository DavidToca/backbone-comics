app.Router = Backbone.Router.extend({

	routes:{
		''  : 'index',
        'register'  : 'register',
        'login'  : 'login',
        'logout'  : 'logout',
        'gender'  : 'gender',
	},

    unloged_routes: ['login', 'register'],

    before: function( route, params ) {
        // determines whenever the route should be access
        // only when the user is logged in
        var route_require_login = this.unloged_routes.indexOf( route ) < 0;

        //check that the user can access this route

        if (route_require_login && !app.session_manager.isLoged()) {
            this.login();
            return false;
        }

        // the actions that doesnt required login should be ignored once
        // the user is logged in (registration and login).
        else if(!route_require_login && app.session_manager.isLoged()){
            this.index();
            return false;
        }

        if (route_require_login) {
            app.base_view.render();
        }
        else{
            app.base_view.unrender();
        }

                return true;
    },

    index : function () { 
        app.comics_view.render(app.comics_collection);
     },

    gender : function () { 
        app.gender_view.render();
     },

    register : function () { 
        app.register_view.render();
     },

	login : function () {
        app.login_view.render();
     },

    logout : function () {
        app.session_manager.logout();
     },
});