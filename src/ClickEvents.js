import {
	getExcercisesBasedOnEquipment,
	createWorkoutPlan,
	mainWorkout,
	weeksComplete,
	fetchQuote,
} from "./FetchWorkouts";
import {
	render,
	displayWeeklyWorkout,
	displayDailyWorkout,
	displayQuote,
} from "./Render";

let clickGenerateWorkoutButton = () => {
	let generatteWorkoutBtn = document.querySelector("#submit-workout");
	generatteWorkoutBtn.addEventListener("click", async (event) => {
		let getNumDays = parseInt(
			document.querySelector('input[name="days"]:checked').value
		);
		let getTime = parseInt(
			document.querySelector('input[name = "time"]:checked').value
		);

		let getEquipment = document.querySelectorAll(
			'input[name="equipment"]:checked'
		);
		let allEquipment = [];
		getEquipment.forEach((item) => allEquipment.push(item.value));

		let currentExcercises = getExcercisesBasedOnEquipment(allEquipment);
		await createWorkoutPlan(currentExcercises, getNumDays, getTime);
		console.log(mainWorkout);
		render(mainWorkout);
	});
};

let clickMotivation = async () => {
	let motivationBtn = document.querySelector("#motivation");
	let information = await fetchQuote();
	motivationBtn.addEventListener("click", () => {
		displayQuote(information.quote, information.author);
	});
};

let clickCompleteBtn = () => {
	document.addEventListener("click", (e) => {
		let el = e.target;
		if (el.id === "complete") {
			let { 0: week, 1: day } = el.dataset.id.split("");

			let currentDay = mainWorkout[week][day];
			currentDay.complete = !currentDay.complete;
			weeksComplete(mainWorkout);
			render(mainWorkout);
		}
	});
};

let clickWorkoutCell = () => {
	document.addEventListener("click", (e) => {
		let el = e.target;
		if (e.target.id === "cell") {
			let { 0: week, 1: day } = el.dataset.id.split("");
			let currentWeek = mainWorkout[week][day];
			displayDailyWorkout(currentWeek);
		}
	});
};

export {
	clickGenerateWorkoutButton,
	clickWorkoutCell,
	clickCompleteBtn,
	clickMotivation,
};
