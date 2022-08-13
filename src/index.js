import "./style.css";
import { createWorkout } from "./WorkoutPlan";

// createWorkout();

document.querySelector("#submit-workout").addEventListener("click", () => {
	let numDays = document.querySelector('input[name="days"]:checked');
	let time = document.querySelector('input[name = "time"]:checked');
	let equipment = document.querySelectorAll(
		'input[name="equipment"]:checked'
	);
	let allEquipment = [];
	equipment.forEach((item) => allEquipment.push(item.value));
	// console.log(value.value, time.value, allEquipment);
	createWorkout(["dumbbell", "barbell"]);
});
