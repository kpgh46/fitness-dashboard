import {
	getExcercisesBasedOnEquipment,
	createWorkoutPlan,
	mainWorkout,
} from "./FetchWorkouts";
import { render } from "./Render";

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

export { clickGenerateWorkoutButton };
