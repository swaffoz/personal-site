$(document).ready(bindEvents);

function bindEvents() {
	$("#mail, #iPhone").addClass("animated bounceInUp");
	$("#icon, nav").addClass("animated bounceInDown");
	$("body").addClass("animated fadeIn");
 	$("*").on("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", removeCSSAnimation); 
}

function removeCSSAnimation() {
	$(this).removeClass("animated");
}
