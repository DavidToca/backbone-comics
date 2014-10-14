
app.UsersCollection = Backbone.Collection.extend({

	model: app.UserModel,
    localStorage: new Backbone.LocalStorage("users_store"),

});