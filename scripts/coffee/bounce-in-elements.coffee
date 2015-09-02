prepareBounceInElements = () ->
	animatedElements = 'img.circular, a.flex-box, img#contact, div#contactButtonContainer'
	$(animatedElements).addClass('animated bounceIn')
	$(animatedElements).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', (->
		$(this).removeClass('animated bounceIn')
		return
	))
	return
