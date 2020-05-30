
function switch_visibility(id) {

	var post_class_name = id.concat("-post");

	var posts = document.getElementsByClassName(post_class_name);

	for (var i = 0; i < posts.length; i++) {

		var post = posts[i];

		if (post.style.display === "none") {
			post.style.display = "block";
		} else {
			post.style.display = "none";
		}
	}


	var button_id = id.concat("-button");

	var button = document.getElementById(button_id);

	console.log(button.style.backgroundColor);

	if (button.style.backgroundColor == 'rgb(133, 133, 133)') {
		button.style.backgroundColor = "#FF4CAB";
		button.style.color = "black";
		console.log("Supuestamente cambiado a rosa");
	} else {
		button.style.backgroundColor = "#858585";
		button.style.color = "white";
		console.log("Supuestamente cambiado a negro");
	}

	console.log(button.style.backgroundColor);

}