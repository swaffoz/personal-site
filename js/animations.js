var typableTexts = [ "Hello, I'm Zane.^100 I live\n in Kansas.^100 \nI make things with^100 <em>❤︎</em>.",
               	 	 "I am available for hire at <a id='adik' class='black'>Developed In Kansas</a>.^100 You can find my open-source work on <a id='agh' class='black'>GitHub</a>.^100 You can email me at <a id='amt' class='black'>zane@otters.io</a>.^100 <br><br>My recent doings:<ul><li><a id='aoio' class='black'>otters.io</a></li><li><a id='awwdc' class='black'>My WWDC Scholarship App</a></li><li><a id='adave' class='black'>Never Enough Dave</a></li><li><a id='amom' class='black'>A Mother's Day Card</a></li></ul>",
                	 "I enjoy:<ul><li>Tinkering with my tiny car</li><li>Brewing coffee</li><li>Playing with old Macs</li><li>Blogging at <a id='ablog' class='black'>otters.io</a></li><li>Tweeting from <a id='atwt' class='black'>@zaneswafford</a></li><li>Puppies</li>", 
                	 "Available as a <a id='aresd' class='black'>Word doc</a> or <a id='aresp' class='black'>PDF</a>." ];

var linksForTexts = { "adik" : "http://developedinkansas.com/",
	 				  "agh" : "https://github.com/zaneswafford",
					  "amt" : "mailto:zane@otters.io",
					  "aoio" : "http://otters.io",
					  "awwdc" : "https://github.com/zaneswafford/wwdc-scholarship-app-2015",
					  "adave" : "http://dave.zaneswafford.com",
					  "amom" : "http://mom.zaneswafford.com",
					  "ablog" : "http://otters.io",
					  "atwt" : "https://twitter.com/ZaneSwafford",
					  "aresd" : "doc/zane-swafford-resume.docx",
					  "aresp" : "doc/zane-swafford-resume.pdf" };
					  
$(document).ready(function() {
  bindEvents();
  showBody();
  addLinksToElements($("a.black"));
});

function showBody() {
  $("body").fadeIn(600, function(){
    loadPageFromCurrentUrl();
    typeTextInElement(typableTexts[0], $("p:first-of-type"));
  }).css("display","inline-block");
}

function bindEvents() {
  $("a").click(onNavLinkClicked);
}

function typeTextInElement(text, element) {
  $(element).typed({
    strings: [text],
    typeSpeed: 0,
    startDelay: 400,
    showCursor: false,
	onStringTyped: function(curString, curStrPos) {
		addLinksToElements($("a"));
	}
  });
}

function addLinksToElements(elements) {
	for (i = 0; i < elements.length; i++) {
		$(elements[i]).attr("href", linksForTexts[$(elements[i]).attr("id")]);
		if ($(elements[i]).attr("id") !== "amt" && linksForTexts[$(elements[i]).attr("id")] != undefined) {
			$(elements[i]).attr("target","_blank");
		}
		
		$(elements[i]).removeClass("black");
	}
}

function onNavLinkClicked() {
  var clickedLinkIndex = $(this).parent("li").index()+1;
  var visiblePIndex = $("p:visible").first().index()-2;
  var clickedLink = $(this);
  var linkText = $(this).text();
  $("p").stop().filter(function(){ return ! $(this).is(":hidden"); }).fadeOut(250, function() {
    if (clickedLinkIndex != visiblePIndex) {
      $("p").eq(clickedLinkIndex).stop().fadeIn(250).css("display","inline-block");;
      setLinkAsInactive("a")
      setLinkAsActive(clickedLink);
      typeTextInElement(typableTexts[clickedLinkIndex], $("p").eq(clickedLinkIndex));
      
      if (linkText === "Zane Swafford ❤") {
        resetURL();
      } else {
        pushUrlSuffixWithTitleSuffix(linkText.substring(3).toLowerCase(), linkText.substring(3));
      }

    } else {
      setLinkAsInactive(clickedLink);
      typeTextInElement(typableTexts[0], $("p:first-of-type"));
      resetURL();
    }
  });
}

function setLinkAsActive(link) {
  $(link).css("color", "#f8584e");
}

function setLinkAsInactive(link) {
  $(link).css("color", "#228DFF");
}

function pushUrlSuffixWithTitleSuffix(urlSuffix, titleSuffix) {
  var url = window.location.href.split("#")[0];
  window.history.pushState(null, "Zane Swafford | " + titleSuffix, url + "#" + urlSuffix); 
}

function resetURL() {
  var url = window.location.href;
  if (url.indexOf("#") > -1) {
    url = url.split("#")[0];
  }

  window.history.pushState(null, "Zane Swafford", url); 
}

function loadPageFromCurrentUrl() {
  var urlParts = window.location.href.split("#");
  var urlEnd = urlParts[urlParts.length-1];
  switch (urlEnd) {
    case "work":
      $("p").stop().fadeOut(250, function() {
        $("p").eq(1).stop().fadeIn(250).css("display","inline-block");;
        setLinkAsInactive("a")
        setLinkAsActive($("header ul li a").eq(0));
        typeTextInElement(typableTexts[1], $("p").eq(1));
      });
      break;
    case "play":
      $("p").stop().fadeOut(250, function() {
        $("p").eq(2).stop().fadeIn(250).css("display","inline-block");;
        setLinkAsInactive("a")
        setLinkAsActive($("header ul li a").eq(1));
        typeTextInElement(typableTexts[2], $("p").eq(2));
      });
      break;
    case "resume":
      $("p").stop().fadeOut(250, function() {
        $("p").eq(3).stop().fadeIn(250).css("display","inline-block");;
        setLinkAsInactive("a")
        setLinkAsActive($("header ul li a").eq(2));
        typeTextInElement(typableTexts[3], $("p").eq(3));
      });
      break;
    default:
      break;
  }
}
