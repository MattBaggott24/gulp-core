const mobileToggle = () => {
	document.getElementById("nav__list").classList.toggle("mobile-open");
	document.getElementById("menu-icon").classList.toggle("visible");
	document.getElementById("close-icon").classList.toggle("visible");
};
document.getElementById("mobile-menu").onclick = mobileToggle;
