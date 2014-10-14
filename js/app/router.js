app.Router = Backbone.Router.extend({

	routes:{
		''  : 'index',
        'register'  : 'register',
        'login'  : 'login',
        'logout'  : 'logout',
	},

    unloged_routes: ['login', 'register']
    ,

    before: function( route, params ) {
        // determines whenever the route should be access
        // only when the user is logged in
        var is_login_required = this.unloged_routes.indexOf( route ) < 0;

        if (is_login_required && !app.session_manager.isLoged()) {
            this.login();
            return false;
        }
        // the actions that doesnt required login should be ignored once
        // the user is logged in (registration and login).
        else if(!is_login_required && app.session_manager.isLoged()){
            this.index();
            return false;
        }
        return true;
    },

    index : function () { 
        app.comics_view.render(app.comics_collection);
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