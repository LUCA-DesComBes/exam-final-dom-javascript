const logMood = document.getElementById("log-mood");
const btnCross = document.querySelector(".btn.text");
const modal = document.querySelector(".modal");
const radioInps = document.querySelectorAll("input[type='radio']");
const formMood = document.querySelector(".log-form");
const lastMoodName = document.getElementById("last-mood-name");
const lastMoodImg = document.getElementById("last-mood-img");
const listMood = document.getElementById("list-mood");

function createElement(tag, attr = {}, textContent = "") {
	const element = document.createElement(tag);
	for (const key in attr) {
		if (key === "className") element.className = attr[key];
		else element.setAttribute(key, attr[key]);
	}
	if (textContent) element.textContent = textContent;
	return element;
}

document.addEventListener("DOMContentLoaded", () => {
	modal.style.display = "none";
});

logMood.addEventListener("click", (e) => {
	e.preventDefault();
	modal.style.display = "flex";
});

let array = [];

formMood.addEventListener("submit", (e) => {
	e.preventDefault();
	let data = new FormData(formMood);
	const moodCard = createElement(
		"div",
		{ className: "mood-card text-preset-4" },
		""
	);
	for (const entry of data) {
		console.log(entry[1]);
		if (entry[1] == "very-happy") {
			moodCard.style.backgroundColor = "var(--amber-300)";
			moodCard.textContent = "Very Happy";
			listMood.prepend(moodCard);
			array.push(moodCard.textContent);
		} else if (entry[1] == "happy") {
			moodCard.style.backgroundColor = "var(--green-300)";
			moodCard.textContent = "Happy";
			listMood.prepend(moodCard);
			array.push(moodCard.textContent);
		} else if (entry[1] == "neutral") {
			moodCard.style.backgroundColor = "var(--blue-300)";
			moodCard.textContent = "Neutral";
			listMood.prepend(moodCard);
			array.push(moodCard.textContent);
		} else if (entry[1] == "sad") {
			moodCard.style.backgroundColor = "var(--indigo-200)";
			moodCard.textContent = "Sad";
			listMood.prepend(moodCard);
			array.push(moodCard.textContent);
		} else if (entry[1] == "very-sad") {
			moodCard.style.backgroundColor = "var(--red-300)";
			moodCard.textContent = "Very Sad";
			listMood.prepend(moodCard);
			array.push(moodCard.textContent);
		}
	}
	modal.style.display = "none";
	console.log(array);
	array.reverse();
	console.log(array[0]);
	if (array[0] == "Very Happy") {       
		lastMoodName.textContent = "Very Happy";
		lastMoodImg.setAttribute("src", "./assets/very-happy.svg");
		lastMoodImg.setAttribute("alt", array[0]);
	} else if (array[0] == "Happy") {
		lastMoodName.textContent = "Happy";
		lastMoodImg.setAttribute("src", "./assets/happy.svg");
		lastMoodImg.setAttribute("alt", array[0]);
	} else if (array[0] == "Neutral") {
		lastMoodName.textContent = "Neutral";
		lastMoodImg.setAttribute("src", "./assets/neutral.svg");
		lastMoodImg.setAttribute("alt", array[0]);
	} else if (array[0] == "Sad") {
		lastMoodName.textContent = "Sad";
		lastMoodImg.setAttribute("src", "./assets/sad.svg");
		lastMoodImg.setAttribute("alt", array[0]);
	} else if (array[0] == "Very Sad") {
		lastMoodName.textContent = "Very Sad";
		lastMoodImg.setAttribute("src", "./assets/very-sad.svg");
		lastMoodImg.setAttribute("alt", array[0]);
	}
});

btnCross.addEventListener("click", () => {
	modal.style.display = "none";
});
