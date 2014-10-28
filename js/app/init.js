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
app.search_view = new app.SearchView();
app.editions_view = new app.TemplateView({template_name: 'editions_template'});
app.news_view = new app.TemplateView({ template_name: 'news_template'});
app.characters_view = new app.TemplateView({ template_name: 'characters_template'});

// Initialie session manager
app.session_manager = new app.SessionManager();

// Initialize router
app.router = new app.Router();

// start routing
Backbone.history.start();