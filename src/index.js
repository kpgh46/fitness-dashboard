import "./style.css";
import {
	getExcercisesBasedOnEquipment,
	createWorkoutPlan,
	weeklyWorkout,
} from "./FetchWorkouts";
import { workout } from "./CreateWorkout";

// createWorkout();

document
	.querySelector("#submit-workout")
	.addEventListener("click", async () => {
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
		// console.log(numDays, time, allEquipment);
		let currentExcercises = getExcercisesBasedOnEquipment([
			"dumbbell",
			"barbell",
		]);
		console.log(await createWorkoutPlan(currentExcercises, 5, 45));
	});
