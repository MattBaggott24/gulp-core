let deg = 360;
let filterArr = ["Close filters", "Open filters"];
document.getElementById("filter-dropdown").addEventListener("click", () => {
	deg -= 180;
	document.getElementsByClassName("filters")[0].classList.toggle("invisible");
	document.getElementsByClassName("filter-icon")[0].style.transform = `rotate(${deg}deg)`;
	document.getElementById("filter-text").innerHTML = filterArr[0];
	let temp = filterArr[0];
	filterArr[0] = filterArr[1];
	filterArr[1] = temp;
	if (deg == 0) {
		deg = 360;
	}
});
