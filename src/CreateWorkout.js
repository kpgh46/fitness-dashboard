import uniqid from "uniqid";

//creates objects for each day with unique ID, completed, url, ect.
let individualDay = (dailyExcercisesArray) => {
	let dailyID = uniqid();
	let excercises = dailyExcercisesArray.map((excercise, i) => {
		return {
			id: uniqid(),
			excerciseNum: i + 1,
			bodyPart: excercise.bodyPart,
			excerciseName: excercise.name,
			equipment: excercise.equipment,
			sets: 3,
			url: excercise.gifUrl,
			complete: false,
		};
	});

	let day = {
		complete: false,
		dayId: dailyID,
		dailyExcercises: [...excercises],
	};

	return day;
};

//turns the weekly plan into a week of workout day objects
let createWeeklyWorkoutPlan = (weeklyPlan) => {
	let plan = weeklyPlan.map((day) => {
		return individualDay(day);
	});
	return plan;
};

export { createWeeklyWorkoutPlan };
