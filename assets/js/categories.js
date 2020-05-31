
function switch_visibility(id) {

	var posts_id = id.concat("-posts");

	var posts = document.getElementById(posts_id);

	if (posts.style.display === "none") {
		posts.style.display = "block";
	} else {
		posts.style.display = "none";
	}

	var button_id = id.concat("-button");

	var button = document.getElementById(button_id);

	if (button.style.backgroundColor == 'rgb(38, 38, 38)') {
		button.style.backgroundColor = "#FF3591";
		button.style.color = "black";
		button.style.border = "1px solid #FF3591";
	} else {
		button.style.backgroundColor = "#262626";
		button.style.color = "white";
		button.style.border = "1px solid white";

	}

}