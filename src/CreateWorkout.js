let individualSet = (arr) => {
	let day = [];
	arr.forEach((part, i) => {
		day.push({
			excerciseNum: i + 1,
			bodyPart: part.bodyPart,
			excerciseName: part.name,
			equipment: part.equipment,
			sets: 3,
			complete: false,
		});
	});

	return day;
};

let testWorkout = (weeklyPlan) => {
	let complete = [];
	weeklyPlan.forEach((day, index) => {
		complete.push(individualSet(day));
	});
	return complete;
};

export { testWorkout };
