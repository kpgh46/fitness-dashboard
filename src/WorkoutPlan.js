let getExcercises = async () => {
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
	let excercises = await getExcercises();
	let filteredExcercises = [];
	equip.forEach((item) => {
		excercises.forEach((excercise) => {
			if (excercise.equipment === item) {
				e.push(excercise);
			}
		});
	});

	return filteredExcercises;
};

let createWorkout = (excercises, days, time) => {};

export { createWorkout };
