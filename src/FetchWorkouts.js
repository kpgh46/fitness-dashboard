import { createWeeklyWorkoutPlan } from "./CreateWorkout";
let mainWorkout = [];
let startingPoint = 0;

//fetch excercises from API
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

//N/A
let fetchQuote = async () => {
	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key":
				"762c75f4ecmshb09408299e534b3p1f6bebjsnbb1df82a374c",
			"X-RapidAPI-Host": "bodybuilding-quotes1.p.rapidapi.com",
		},
	};

	let response = await fetch(
		"https://bodybuilding-quotes1.p.rapidapi.com/random-quote",
		options
	);
	let data = await response.json();

	return data;
};

//filters dataset based on user equipment availability
let getExcercisesBasedOnEquipment = async (equip = []) => {
	let excercises = await fetchExcercises();
	let filteredExcercises = [];

	//
	equip.forEach((item) => {
		excercises.forEach((excercise) => {
			if (excercise.equipment === item) {
				filteredExcercises.push(excercise);
			}
		});
	});

	// let filteredExcercises = equip.forEach((equipment) => {
	// 	excercises.filter((excercise) => {
	// 		return excercise.equipment === equipment;
	// 	});
	// });

	return filteredExcercises;
};

//returns list of muscleGroups. for ex: ["chest", "back", "chest", "back"..]
let getWorkoutExcercises = (muscleGroups, num) => {
	for (let i = 0; i < num; i++) {
		// console.log(muscles[i], i);
		muscleGroups.push(muscleGroups[i]);
	}
	return muscleGroups;
};

//returns a single workout based on criteria
let createSingleWorkout = (excercises, muscles, numOfExcercises) => {
	let numPerWorkout = numOfExcercises - muscles.length;
	let muscleGroups = getWorkoutExcercises(muscles, numPerWorkout);

	//each muscle group is mapped to a randomized excercise
	let workout = muscleGroups.map((muscle, i) => {
		let filterMuscle = excercises.filter((item) => {
			return item.bodyPart === muscle;
		});

		let randomNum = Math.floor(Math.random() * filterMuscle.length);

		return filterMuscle[randomNum];
	});

	return workout;
};

let excercisesPerWorkout = (time) => {
	if (time === 15) {
		return 3;
	}
	if (time === 30) {
		return 6;
	}
	if (time === 45) {
		return 9;
	}
	if (time === 60) {
		return 12;
	}
};

let createWorkoutPlan = async (excercises, numberOfDays, amountOfTime) => {
	let weeklyWorkout = [];
	let getNumberOfExcercisesPerWorkout = excercisesPerWorkout(amountOfTime);
	let currentExcercises = await excercises;
	let getSlicedBodyParts = numberOfDays === 2 ? 3 : 2;
	let bodyParts = [
		"back",
		"chest",
		"shoulders",
		"upper legs",
		"waist",
		"upper arms",
	];

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

let weeksComplete = (workout) => {
	let weeksCompletedCount = 0;
	let weeksCompleted = document.querySelector("#weeks-completed");
	workout.forEach((week) => {
		let checkIfAllComplete = week.every((item) => {
			return item.complete;
		});
		console.log(checkIfAllComplete);

		if (checkIfAllComplete) {
			weeksCompletedCount++;
		}
	});
	weeksCompleted.textContent = weeksCompletedCount;
};

let workoutsComplete = (workout) => {
	let workoutsCompleteCount = 0;
	let workoutsComplete = document.querySelector("#workouts-completed");
	workout.forEach((week) => {
		week.forEach((day) => {
			if (day.complete) {
				workoutsCompleteCount++;
			}
		});
	});

	workoutsComplete.textContent = workoutsCompleteCount;
};

export {
	getExcercisesBasedOnEquipment,
	createWorkoutPlan,
	createSingleWorkout,
	mainWorkout,
	weeksComplete,
	workoutsComplete,
	fetchQuote,
	fetchExcercises,
};
