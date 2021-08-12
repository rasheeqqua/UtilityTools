var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".randombutton");

css.textContent = "initial CSS linear gradient property: (" + color1.value + ", " + color2.value + ")";

function gradientChange() {
	css.textContent = "";
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

function randomcolorgenerate() {
	var hexcode1 = (Math.random() * 0xffffff * 1000000).toString(16);
	var colorcode1 = "#" + hexcode1.slice(0,6);

	var hexcode2 = (Math.random() * 0xffffff * 1000000).toString(16);
	var colorcode2 = "#" + hexcode2.slice(0,6);

	color1.value = colorcode1;
	color2.value = colorcode2;
	gradientChange();
}

color1.addEventListener("input",gradientChange);
color2.addEventListener("input",gradientChange);
button.addEventListener("click",randomcolorgenerate);