const thumbnails = document.getElementsByClassName("thumbnail");
const activeImages = document.getElementsByClassName("active");
const rightChevron = document.getElementsByClassName("right-chevron")[0];
const leftChevron = document.getElementsByClassName("left-chevron")[0];

for (let i = 0; i < thumbnails.length; i++) {
	thumbnails[i].addEventListener("mouseover", () => {
		if (activeImages.length > 0) {
			activeImages[0].classList.remove("active");
		}

		thumbnails[i].classList.add("active");
		document.getElementById("featured").src = thumbnails[i].src;
	});
}

let translate = 0;
rightChevron.addEventListener("click", () => {
	translate += 25;
	if (translate >= 100) {
		translate = 100;
	}
	document.getElementsByClassName("carousel__img-container")[0].style.transform = `translateX(-${translate}%)`;
});
leftChevron.addEventListener("click", () => {
	translate -= 25;
	if (translate <= 0) {
		translate = 0;
	}
	document.getElementsByClassName("carousel__img-container")[0].style.transform = `translateX(-${translate}%)`;
});
