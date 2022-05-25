const thumbnails = document.getElementsByClassName("thumbnail");
const activeImages = document.getElementsByClassName("active");

for (let i = 0; i < thumbnails.length; i++) {
	thumbnails[i].addEventListener("mouseover", () => {
		// if (activeImages[0].length > 0) {
		// 	activeImages[0].classList.remove("active");
		// }

		thumbnails[i].classList.add("active");
		document.getElementById("featured").src = thumbnails[i].src;
	});
}
