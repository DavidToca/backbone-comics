app.Router = Backbone.Router.extend({

	routes:{
		''  : 'index',
	},

	index : function () { 
    	console.log('index');    
     },

});

app.router = new app.Router();