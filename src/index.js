import "./style.css";

// console.log("hi", "again");

// const axios = require("axios");

// const options = {
// 	method: "GET",
// 	headers: {
// 		"X-RapidAPI-Key": "762c75f4ecmshb09408299e534b3p1f6bebjsnbb1df82a374c",
// 		"X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
// 	},
// };

// fetch(
// 	"https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=biceps",
// 	options
// )
// 	.then((response) => response.json())
// 	.then((response) => console.log(response))
// 	.catch((err) => console.error(err));

// const options = {
// 	method: "GET",
// 	headers: {
// 		"X-RapidAPI-Key": "762c75f4ecmshb09408299e534b3p1f6bebjsnbb1df82a374c",
// 		"X-RapidAPI-Host": "exercises1.p.rapidapi.com",
// 	},
// };

// fetch("https://exercises1.p.rapidapi.com/", options)
// 	.then((response) => response.json())
// 	.then((response) => console.log(response))
// 	.catch((err) => console.error(err));

document.querySelector("#submit-workout").addEventListener("click", () => {
	let value = document.querySelector('input[name="days"]:checked');
	console.log(value);
});
