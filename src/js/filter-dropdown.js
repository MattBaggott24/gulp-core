let deg = 360;
document.getElementById("filter-dropdown").addEventListener("click", () => {
	deg -= 180;
	document.getElementsByClassName("filters")[0].classList.toggle("invisible");
	document.getElementsByClassName("filter-icon")[0].style.transform = `rotate(${deg}deg)`;
	if (deg == 0) {
		deg = 360;
	}
});
