// Initialize collections
app.comics_collection = new app.ComicsCollection();
app.comics_collection.fetch();

app.users_collection = new app.UsersCollection();
app.users_collection.fetch();

// Initialize views
app.base_view = new app.BaseView();
app.comics_view = new app.ComicsView();
app.login_view = new app.LoginView();
app.register_view = new app.RegisterView();
app.gender_view = new app.GenderView();

// Initialie session manager
app.session_manager = new app.SessionManager();

// Initialize router
app.router = new app.Router();

// start routing
Backbone.history.start();