$(document).ready(function() {


	console.log("hi");

	$(".label").click(function(e) {


		$(".label-container").toggleClass("zoom-projects");
		$(".debug-zoom").toggleClass("show-zoom");
		
	});

	$(".debug-zoom").click(function(e) {


		$(".label-container").toggleClass("zoom-projects");
		$(".debug-zoom").toggleClass("show-zoom");
		
	});




});
