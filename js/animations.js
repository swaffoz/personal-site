var typableTexts = ["Hello, I'm Zane.^200 I live\n in Kansas.^200 \nI make things with^100 <em>❤︎</em>.",
                "I am available for hire at <a target='_blank' href='http://developedinkansas.com/'>Developed In Kansas</a>.^300 You can find my open-source work on <a target='_blank' href='https://github.com/zaneswafford'>GitHub</a>.^300 You can email me at <a href='mailto:&#122;&#097;&#110;&#101;&#064;&#111;&#116;&#116;&#101;&#114;&#115;&#046;&#105;&#111;'>zane@otters.io</a>.^300 <br><br>My recent doings:<ul><li><a target='_blank' href='http://otters.io'>otters.io</a></li><li><a target='_blank' href='https://github.com/zaneswafford/wwdc-scholarship-app-2015'>My WWDC Scholarship Application</a></li><li><a target='_blank' href='http://dave.zaneswafford.com'>Never Enough Dave</a></li><li><a target='_blank' href='http://mom.zaneswafford.com'>A Mother's Day Card</a></li></ul>",
                "I enjoy:<ul><li>Tinkering with my tiny car</li><li>Brewing coffee</li><li>Playing with old Macs</li><li>Blogging at <a target='_blank' href='http://otters.io'>otters.io</a></li><li>Tweeting from <a target='_blank' href='https://twitter.com/ZaneSwafford'>@zaneswafford</a></li><li>Puppies</li>", 
                "Available as a <a target='_blank' href='doc/zane-swafford-resume.docx'>Word doc</a> or <a target='_blank' href='doc/zane-swafford-resume.pdf'>PDF</a>."];

$(document).ready(function() {
  bindEvents();
  showBody();
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
    showCursor: false
  });
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
