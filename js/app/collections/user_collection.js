
app.UsersCollection = Backbone.Collection.extend({
	url: "/app/js/data/initial_user_data.json",
	model: app.UserModel,
    localStorage: new Backbone.LocalStorage("users_store"),
});