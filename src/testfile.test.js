import { fetchExcercises } from "./FetchWorkouts";

test("the first bodyPart is waist", async () => {
	let data = await fetchExcercises();
	expect(data.length).toEqual(1327);
});
