app.Router = Backbone.Router.extend({

	routes:{
		''  : 'index',
        'register'  : 'register',
        'login'  : 'login',
        'logout'  : 'logout',
        'gender'  : 'gender',
        'editions'  : 'editions',
        'news'  : 'news',
        'characters'  : 'characters',
        'search'  : 'search'
	},

    unloged_routes: ['login', 'register'],

    before: function( route, params ) {
        // determines whenever the route should be access
        // only when the user is logged in
        var route_require_login = this.unloged_routes.indexOf( route ) < 0;

        //check that the user can access this route

        if (route_require_login && !app.session_manager.isLoged()) {
            window.location.hash = 'login';
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
        app.comics_view.render({comics_collection: app.comics_collection});
     },

    gender : function () { 
        app.gender_view.render();
     },


    editions : function () { 
        app.editions_view.render();
     },

    search: function () { 
        app.search_view.render();
     },


    news : function () { 
        app.news_view.render();
     },


    characters : function () { 
        app.characters_view.render();
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