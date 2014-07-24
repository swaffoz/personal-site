var numClicks = 0;
$(document).ready( function() {
	$("#moreDave").click(function(){
		numClicks++;
		if (numClicks < 6) {
			$("#dave").css({"margin-top": (-20 * numClicks).toString() + "pt" });
			$("#dave").css({"margin-left": (-20 * numClicks).toString() + "pt" });
			$("#dave").css({"width": (80 + 20 * numClicks).toString() + "pt" });
		}
		if (numClicks > 2) {
			$("#puppies").fadeIn();
		}
		if (numClicks === 15) {
			$("#about").append('<blink id="blink" style="position: fixed; top: 0; text-align: center; width:100%; font-size: 100pt; left:0; font-size: 100pt;font-weight: 800;color:#fdf1aa;">TOO MUCH DAVE</blink>')
			$("#blink").blink();
		}
	});

	$("#puppies").click(function(){
			var randImg = (Math.floor(Math.random() * 5) + 1).toString() + '.png'
			var randTop = (getRandomInt(100, $(window).height() - 100)).toString() + "px";
			var randLeft = (getRandomInt(100, $(window).width() - 100)).toString()+"px";
			$("body").append('<img style="position:fixed; top: ' + randTop + '; left: ' + randLeft + ';" src="img/' + randImg + '"/>');
			$.playSound("snd/bark");
	});
});

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
Math.random=(function(rand) {
	var salt=0;
	document.addEventListener('mousemove',function(event) {
		salt=event.pageX*event.pageY;

		});
return function() { return (rand()+(1/(1+salt)))%1;  };

})(Math.random);
