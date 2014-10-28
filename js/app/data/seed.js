
if(app.comics_collection.length < 1){
	// comics
	var comic_1 = new app.ComicModel({code: "1", name: "all star adventure", characters: "", cover_image: "images/comic_1.jpg", searched: true, recommended: true});
	var comic_2 = new app.ComicModel({code: "2", name: "planet", cover_image: "images/comic_2.jpg", characters: "", popular: true, searched: true});
	var comic_3 = new app.ComicModel({code: "3", name: "the mutants", characters: "rougue|wolverine|beast", cover_image: "images/comic_3.jpg", recommended: true});
	var comic_4 = new app.ComicModel({code: "4", name: "the new mutants", characters: "rougue|wolverine|beast", cover_image: "images/comic_4.jpg", loaned: true});
	var comic_5 = new app.ComicModel({code: "5", name: "x men", edition: "anniversary", characters: "rougue|wolverine|beast", cover_image: "images/comic_5.jpg", recommended: true});
	var comic_6 = new app.ComicModel({code: "6", name: "the defenders", characters: "beast", cover_image: "images/comic_6.jpg", popular: true, recommended: true});
	var comic_7 = new app.ComicModel({code: "7", name: "the tales of the teen titans",characters: "", cover_image: "images/comic_7.jpg", searched: true});
	var comic_8 = new app.ComicModel({code: "8", name: "spiderman", edition: "anniversary", cover_image: "images/comic_8.jpg", characters: "spiderman", top: true});
	var comic_9 = new app.ComicModel({code: "9", name: "four fantastic", edition: "anniversary", characters: "", cover_image: "images/comic_9.jpg", popular: true, searched: true, recommended: true});
	var comic_10 = new app.ComicModel({code: "10", name: "flash gordon", characters: "flash", cover_image: "images/comic_10.jpg", popular: true});
	var comic_11 = new app.ComicModel({code: "11", name: "green lantern", characters: "green lantern", cover_image: "images/comic_11.jpg", qualificated: true });
	var comic_12 = new app.ComicModel({code: "12", name: "ultra boy", characters: "", cover_image: "images/comic_12.jpg", qualificated: true});

	comic_1.save();
	comic_2.save();
	comic_3.save();
	comic_4.save();
	comic_5.save();
	comic_6.save();
	comic_7.save();
	comic_8.save();
	comic_9.save();
	comic_10.save();
	comic_11.save();
	comic_12.save();
}

if(app.users_collection.length < 1){
	// users
	var regular_user = new app.UserModel({name: "david", username: "davidtoca", password: "123456"});
	regular_user.save()
	var sheldon = new app.UserModel({name: "sheldon", username: "sheldon", password: "bazinga", is_admin: true});
	sheldon.save()
}