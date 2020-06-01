
function switch_visibility(id) {

	var all_posts = document.getElementsByClassName("posts");

	for (var i = 0; i < all_posts.length; i++) {
	  all_posts[i].style.display = "none";
	}

	var posts = document.getElementById(id.concat("-posts"));

	posts.style.display = "block";

	var all_buttons = document.getElementsByClassName("filter-button");

	for (var i = 0; i < all_buttons.length; i++) {
	  all_buttons[i].style.backgroundColor = "#1C1C1C";
	  all_buttons[i].style.color = "white";
	  all_buttons[i].style.border = "1px solid white";
	}

	var button = document.getElementById(id.concat("-button"));

	button.style.backgroundColor = "#FF3591";
	button.style.color = "black";
	button.style.border = "1px solid #FF3591";

}