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

	// console.log(filteredExcercises);
	return filteredExcercises;
};

let createSingleWorkout = (excercises, muscles, numOfExcercises) => {
	let workout = [];
	let difference = numOfExcercises - muscles.length;

	for (let i = 0; i < difference; i++) {
		muscles.push(muscles[i]);
	}

	muscles.forEach((muscle) => {
		let filterMuscle = excercises.filter((item) => {
			return item.bodyPart === muscle;
		});

		let randomNum = Math.floor(Math.random() * filterMuscle.length + 1);
		workout.push(filterMuscle[randomNum]);
	});

	console.log(workout);
};

let createWorkoutPlan = async (excercises, numberOfDays, amountOfTime) => {
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

	for (let i = 0; i < numberOfDays; i++) {
		let currentBodyParts = bodyParts.splice(0, getSlicedBodyParts);
		createSingleWorkout(
			currentExcercises,
			currentBodyParts,
			getNumberOfExcercisesPerWorkout
		);
	}

	// console.log(getNumberOfSetsPerWorkout, getSlicedBodyParts);

	//if 15 minutes, then 3 excercises
	//if 30 minutes, then 6 excercises
	//if 45 minutes, then 9 excercises
	//if 60 minutes, then 12 excercises

	//if 2 days, then 3 body parts on each day.  Slice bodyparts by 3
	//if > 2, then 2 body parts each day. Slice bodyparts by 2
};

export { getExcercisesBasedOnEquipment, createWorkoutPlan };
