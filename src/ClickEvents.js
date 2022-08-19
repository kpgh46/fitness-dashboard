import {
	getExcercisesBasedOnEquipment,
	createWorkoutPlan,
	mainWorkout,
} from "./FetchWorkouts";
import { render, displayWorkout } from "./Render";

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

let clickCompleteBtn = (workout) => {
	document.addEventListener("click", (e) => {
		let el = e.target;
		if (el.id === "complete") {
			let { 0: week, 1: day } = el.dataset.id.split("");

			let currentDay = mainWorkout[week][day];
			currentDay.complete = !currentDay.complete;

			displayWorkout(workout);
		}
	});
};

export { clickGenerateWorkoutButton };
