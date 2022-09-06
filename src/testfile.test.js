import { defaults } from "autoprefixer";
import { fetchExcercises } from "./FetchWorkouts";
import {
	getExcercisesBasedOnEquipment,
	createSingleWorkout,
} from "./FetchWorkouts";
import { mockdata } from "./mockdata";

global.fetch = jest.fn(() =>
	Promise.resolve({
		json: () => Promise.resolve(mockdata),
	})
);

describe("Workouts", () => {
	let getExcercises;

	describe("When we get excercises based on equipment", () => {
		beforeEach(async () => {
			getExcercises = await fetchExcercises();
		});

		test("check first bodypart", () => {
			expect(getExcercises[0].bodyPart).toBe("waist");
		});

		test("if all equipment is filtered correctly", async () => {
			let currentExcercises = await getExcercisesBasedOnEquipment([
				"barbell",
			]);

			let allTheSame = currentExcercises.every((item) => {
				return item.equipment === "barbell";
			});
			expect(allTheSame).toBe(true);
		});
	});
});
