const mobileToggle = () => {
	document.getElementById("nav__list").classList.toggle("mobile-open");
	document.getElementById("menu-icon").classList.toggle("visible");
	document.getElementById("close-icon").classList.toggle("visible");
	// document.getElementByTagName("html").classList.toggle("locked");
	document.getElementsByTagName("html")[0].classList.toggle("locked");
};
document.getElementById("mobile-menu").onclick = mobileToggle;
