import uniqid from "uniqid";

let individualDay = (dailyExcercisesArray) => {
	let day = [];
	dailyExcercisesArray.forEach((excercise, i) => {
		day.push({
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
