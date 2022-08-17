import "./style.css";
import {
	getExcercisesBasedOnEquipment,
	createWorkoutPlan,
	weeklyWorkout,
	mainWorkout,
} from "./FetchWorkouts";
import { render } from "./Render";

// createWorkout();

document
	.querySelector("#submit-workout")
	.addEventListener("click", async (event) => {
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

		// console.log(mainWorkout);
		render(mainWorkout);
	});
