$(document).ready(function() {


	console.log("hi");

	$(".projects").click(function() {
		if ($(".app-container").hasClass("zoom-in")) {
			$(".app-container").removeClass("zoom-in");
		} else {
			$(".app-container").addClass("zoom-in");
		}

		if ($(".zoom-container").hasClass("show")) {
			$(".zoom-container").removeClass("show");
		} else {
			$(".zoom-container").addClass("show");
		}

		if ($(".block.top").hasClass("shift-top")) {
			$(".block.top").removeClass("shift-top");
		} else {
			$(".block.top").addClass("shift-top");
		}
	});

	$(".zoom-container").click(function() {
		if ($(".app-container").hasClass("zoom-in")) {
			$(".app-container").removeClass("zoom-in");
		} else {
			$(".app-container").addClass("zoom-in");
		}

		if ($(".zoom-container").hasClass("show")) {
			$(".zoom-container").removeClass("show");
		} else {
			$(".zoom-container").addClass("show");
		}

		if ($(".block.top").hasClass("shift-top")) {
			$(".block.top").removeClass("shift-top");
		} else {
			$(".block.top").addClass("shift-top");
		}
	});


});
