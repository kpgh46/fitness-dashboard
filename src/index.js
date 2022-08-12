import "./style.css";

const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "762c75f4ecmshb09408299e534b3p1f6bebjsnbb1df82a374c",
		"X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
	},
};

fetch(
	"https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?difficulty=beginner",
	options
)
	.then((response) => response.json())
	.then((response) => console.log(response))
	.catch((err) => console.error(err));

document.querySelector("#submit-workout").addEventListener("click", () => {
	let value = document.querySelector('input[name="days"]:checked');
	let time = document.querySelector('input[name = "time"]:checked');
	let equipment = document.querySelectorAll(
		'input[name="equipment"]:checked'
	);
	equipment.forEach((item) => console.log(item.value));
});
