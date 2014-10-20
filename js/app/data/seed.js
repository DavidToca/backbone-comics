
if(app.comics_collection.length < 1){
	// comics
	var comic_1 = new app.ComicModel({name: "comic 1", cover_image: "images/comic_1.jpg", searched: true, recommended: true});
	var comic_2 = new app.ComicModel({name: "comic 2", cover_image: "images/comic_2.jpg", popular: true, searched: true});
	var comic_3 = new app.ComicModel({name: "comic 3", cover_image: "images/comic_3.jpg", recommended: true});
	var comic_4 = new app.ComicModel({name: "comic 4", cover_image: "images/comic_4.jpg", loaned: true});
	var comic_5 = new app.ComicModel({name: "comic 5", cover_image: "images/comic_5.jpg", recommended: true});
	var comic_6 = new app.ComicModel({name: "comic 6", cover_image: "images/comic_6.jpg", popular: true, recommended: true});
	var comic_7 = new app.ComicModel({name: "comic 7", cover_image: "images/comic_7.jpg", searched: true});
	var comic_8 = new app.ComicModel({name: "comic 8", cover_image: "images/comic_8.jpg", top: true});
	var comic_9 = new app.ComicModel({name: "comic 9", cover_image: "images/comic_9.jpg", popular: true, searched: true, recommended: true});
	var comic_10 = new app.ComicModel({name: "comic 10", cover_image: "images/comic_10.jpg", popular: true});
	var comic_11 = new app.ComicModel({name: "comic 11", cover_image: "images/comic_11.jpg", qualificated: true });
	var comic_12 = new app.ComicModel({name: "comic 12", cover_image: "images/comic_12.jpg", qualificated: true});

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