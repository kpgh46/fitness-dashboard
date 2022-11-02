import {
	getExcercisesBasedOnEquipment,
	createWorkoutPlan,
	fetchExcercises,
	mainWorkout,
} from "./FetchWorkouts";
import { mockdata } from "./mockdata";

global.fetch = jest.fn(() =>
	Promise.resolve({
		json: () => Promise.resolve(mockdata),
	})
);

describe("Workouts", () => {
	let getExcercises;

	describe("get excercises based on equipment", () => {
		beforeEach(async () => {
			getExcercises = await fetchExcercises();
		});

		test("check first bodypart", () => {
			expect(getExcercises[0].bodyPart).toBe("waist");
		});

		test("if all equipment is filtered based on input", async () => {
			let currentExcercises = await getExcercisesBasedOnEquipment([
				"barbell",
			]);

			let allTheSame = currentExcercises.every((item) => {
				return item.equipment === "barbell";
			});
			expect(allTheSame).toBe(true);
		});

		test("generating a workout week plan", async () => {
			createWorkoutPlan(getExcercises, 4, 45);
			let workoutPlan = await mainWorkout;
			console.log(workoutPlan[0][0].dailyExcercises.length);
			expect(workoutPlan.length).toBe(1);
		});

		test("correct number of excercises based on amount of time", async () => {
			createWorkoutPlan(getExcercises, 4, 30);
			let workoutPlan = await mainWorkout;
			expect(workoutPlan[1][0].dailyExcercises.length).toBe(6);
		});

		test("correct number of days based on days input", async () => {
			let workoutPlan = await mainWorkout;
			expect(workoutPlan[0].length).toBe(4);
		});

		test("number of workouts complete", async () => {
			console.log(mainWorkout);
		});
	});
});
