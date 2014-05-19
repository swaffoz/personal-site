$(document).ready(bindEvents);

function bindEvents() {
	$("a.listChild").click(scrollToLinkedSection);
	$("img.transitionable").hover(hoverImgTransition);
	$("a.transitionable").hover(hoverLinkTransition);
}

function scrollToLinkedSection() {
	section = $(this).find("li").text().toLowerCase();
	$('html, body').animate({
		scrollTop: $("#" + section).offset().top-10
	}, 800);
}

function hoverLinkTransition() {
	imgArea = $("#" + $(this).attr("id").slice(0,-4));

	if ($(this).hasClass('active')) {
		$(this).removeClass('active');
		imgArea.removeClass('active');
	} else {
		$(this).addClass('active');
		imgArea.addClass('active');
	}
}


function hoverImgTransition() {
	textArea = $("#" + $(this).attr("id") + "Text");

	if ($(this).hasClass('active')) {
		$(this).removeClass('active');
		textArea.removeClass('active');
	} else {
		$(this).addClass('active');
		textArea.addClass('active');
	}
}
