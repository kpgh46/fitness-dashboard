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

let createWorkoutPlan = async (excercises, numberOfDays, amountOfTime) => {
	let bodyParts = [
		"back",
		"chest",
		"shoulders",
		"upper legs",
		"abs",
		"upper arms",
	];

	let getNumberOfSetsPerWorkout =
		amountOfTime === 15
			? 4
			: amountOfTime === 30
			? 8
			: amountOfTime === 45
			? 12
			: amountOfTime === 60
			? 16
			: 0;

	let getSlicedBodyParts = numberOfDays === 2 ? 3 : 2;

	let currentExcercises = await excercises;

	for (let i = 0; i < numberOfDays; i++) {
		let currentBodyParts = bodyParts.splice(0, getSlicedBodyParts);
		console.log(currentBodyParts);
	}

	// console.log(getNumberOfSetsPerWorkout, getSlicedBodyParts);

	//if 15 minutes, then 4 excercises
	//if 30 minutes, then 8 excercises
	//if 45 minutes, then 12 excercises
	//if 60 minutes, then 16 excercises

	//if 2 days, then 3 body parts on each day.  Slice bodyparts by 3
	//if > 2, then 2 body parts each day. Slice bodyparts by 2
};

export { getExcercisesBasedOnEquipment, createWorkoutPlan };
