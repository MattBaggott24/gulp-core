const tabs = document.getElementsByClassName("tab");
const tabContent = document.getElementsByClassName("tab-content__content");

for (let i = 0; i < tabs.length; i++) {
	tabs[i].addEventListener("click", () => {
		for (let j = 0; j < tabs.length; j++) {
			tabs[j].classList.remove("currentTab");
			tabContent[j].classList.remove("tab-content__current");
		}
		tabs[i].classList.add("currentTab");
		tabContent[i].classList.add("tab-content__current");
	});
}
