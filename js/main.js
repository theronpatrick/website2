$(document).ready(function() {


	console.log("hi");

	// Attach click functions

	$(".label.projects").click(function(e) {
		$(".label-container").toggleClass("zoom-projects");
		$(".zoom-content.projects").toggleClass("show-zoom");
	});
	$(".zoom-content.projects").click(function(e) {
		$(".label-container").toggleClass("zoom-projects");
		$(".zoom-content.projects").toggleClass("show-zoom");
	});

	$(".label.about").click(function(e) {
		$(".label-container").toggleClass("zoom-about");
		$(".zoom-content.about").toggleClass("show-zoom");
	});
	$(".zoom-content.about").click(function(e) {
		$(".label-container").toggleClass("zoom-about");
		$(".zoom-content.about").toggleClass("show-zoom");
	});

	$(".label.contact").click(function(e) {
		$(".label-container").toggleClass("zoom-contact");
		$(".zoom-content.contact").toggleClass("show-zoom");
	});
	$(".zoom-content.contact").click(function(e) {
		$(".label-container").toggleClass("zoom-contact");
		$(".zoom-content.contact").toggleClass("show-zoom");
	});




});
