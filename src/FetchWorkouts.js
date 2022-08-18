import { createWeeklyWorkoutPlan } from "./CreateWorkout";
let mainWorkout = [];

let fetchExcercises = async () => {
	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key":
				"762c75f4ecmshb09408299e534b3p1f6bebjsnbb1df82a374c",
			"X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
		},
	};

	let response = await fetch(
		"https://exercisedb.p.rapidapi.com/exercises",
		options
	);
	let data = await response.json();
	console.log(data);
	return data;
};

//filters based on user equipment availability
let getExcercisesBasedOnEquipment = async (equip = []) => {
	let excercises = await fetchExcercises();
	let filteredExcercises = [];
	equip.forEach((item) => {
		excercises.forEach((excercise) => {
			if (excercise.equipment === item) {
				filteredExcercises.push(excercise);
			}
		});
	});

	return filteredExcercises;
};

let createSingleWorkout = (excercises, muscles, numOfExcercises) => {
	let workout = [];
	let difference = numOfExcercises - muscles.length;

	for (let i = 0; i < difference; i++) {
		muscles.push(muscles[i]);
	}

	muscles.forEach((muscle, i) => {
		let filterMuscle = excercises.filter((item) => {
			return item.bodyPart === muscle;
		});

		let randomNum = Math.floor(Math.random() * filterMuscle.length);

		let randomExcercise = filterMuscle[randomNum];

		workout.push(randomExcercise);
	});

	return workout;
};

let createWorkoutPlan = async (excercises, numberOfDays, amountOfTime) => {
	let weeklyWorkout = [];
	let currentExcercises = await excercises;
	let bodyParts = [
		"back",
		"chest",
		"shoulders",
		"upper legs",
		"waist",
		"upper arms",
	];

	let getNumberOfExcercisesPerWorkout =
		amountOfTime === 15
			? 3
			: amountOfTime === 30
			? 6
			: amountOfTime === 45
			? 9
			: amountOfTime === 60
			? 12
			: 0;

	let getSlicedBodyParts = numberOfDays === 2 ? 3 : 2;

	let startingPoint = 0;

	for (let i = 0; i < numberOfDays; i++) {
		if (startingPoint > 5) {
			startingPoint = 0;
		}
		let currentBodyParts = bodyParts.slice(
			startingPoint,
			startingPoint + getSlicedBodyParts
		);

		weeklyWorkout.push(
			createSingleWorkout(
				currentExcercises,
				currentBodyParts,
				getNumberOfExcercisesPerWorkout
			)
		);

		startingPoint += 2;
	}

	mainWorkout.push(createWeeklyWorkoutPlan(weeklyWorkout));
};

export { getExcercisesBasedOnEquipment, createWorkoutPlan, mainWorkout };
