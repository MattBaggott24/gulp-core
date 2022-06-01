const arrowLinks = document.getElementsByClassName("arrow");
const navItems = document.getElementsByClassName("nav__item");

for (let i = 0; i < arrowLinks.length; i++) {
	navItems[i].addEventListener("click", () => {
		arrowLinks[i].classList.toggle("arrow-rotate");
	});
}

const menuBurger = document.getElementsByClassName("header-btns__btn")[0];

menuBurger.addEventListener("click", () => {
	document.getElementById("menu-close").classList.toggle("invisible");
	document.getElementById("menu-open").classList.toggle("invisible");
	document.getElementsByClassName("nav__list")[0].classList.toggle("invisible");
});
