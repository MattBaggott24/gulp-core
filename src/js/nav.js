let navs = document.getElementsByClassName("nav__link");
var titles = ["Home Page", "Property Search", "Listing", "News & Events", "Application Form"];

for (let i = 0; i < titles.length; i++) {
	document.title == titles[i] ? navs[i].classList.add("active-link") : null;
}
