import uniqid from "uniqid";

let individualDay = (dailyExcercisesArray) => {
	let excercises = [];
	let dailyID = uniqid();
	dailyExcercisesArray.forEach((excercise, i) => {
		excercises.push({
			id: uniqid(),
			excerciseNum: i + 1,
			bodyPart: excercise.bodyPart,
			excerciseName: excercise.name,
			equipment: excercise.equipment,
			sets: 3,
			url: excercise.gifUrl,
			complete: false,
		});
	});

	let day = {
		complete: false,
		dayId: dailyID,
		dailyExcercises: [...excercises],
	};

	return day;
};

let createWeeklyWorkoutPlan = (weeklyPlan) => {
	let complete = [];
	weeklyPlan.forEach((day, index) => {
		complete.push(individualDay(day));
	});
	return complete;
};

export { createWeeklyWorkoutPlan };
