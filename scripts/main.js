/* 
   This script sets a cookie to see if I should show you the fun css animation.
   If you've already seen it today, I'm not going to waste your time doing it again.
*/

window.onload = function () { 
	var animationSeen = (document.cookie.replace(/(?:(?:^|.*;\s*)OnlyShowAnimationOnce\s*\=\s*([^;]*).*$)|^.*$/, "$1") == "true");
	
	if (animationSeen) {
		var animatedElements = document.querySelectorAll(".fadeIn");

		[].forEach.call(animatedElements, function(e) {
			e.classList.remove("fadeIn");
		});
	} else {
		setCookie();
	}
}

function setCookie(){
    var expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 1);
    var dateString = expirationDate.toGMTString();
    var cookieString = "OnlyShowAnimationOnce=true; expires=" + dateString;
    
    document.cookie = cookieString;
}
