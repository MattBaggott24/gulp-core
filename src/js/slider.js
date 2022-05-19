const slider = document.getElementById("myRange");
const demo = document.getElementById("demo");
const priceInput = document.getElementById("price-box");

slider.oninput = function () {
	priceInput.value = numberWithComma(this.value);
};

priceInput.oninput = function () {
	slider.value = numberWithoutComma(this.value);
};

const numberWithComma = (num) => {
	const tempNum = num.split("");
	tempNum.splice(tempNum.length - 3, 0, ",");
	return tempNum.join("");
};

const numberWithoutComma = (num) => {
	return num.replace(/,/g, "");
};

priceInput.value = numberWithComma(slider.value);
