var screenHeight = screen.height;
var topnavHeight = document.getElementById("topnav").offsetHeight;

var bannerContent = document.getElementById("bannerContent");
var styleValueOne = (screenHeight/4) + "px";
var contentOne = bannerContent.style.marginTop = styleValueOne;

var parallaxSection = document.getElementById("parallaxSection");
var styleValueTwo = ((screenHeight/4)-40) + "px";
var contentTwo = parallaxSection.style.marginTop = styleValueTwo;