let individualSet = (excercise, index) => {
	let set = {
		number: index,
		bodyPart: excercise.bodyPart,
		excerciseName: excercise.name,
		sets: 3,
		complete: false,
	};
	return set;
};

let testWorkout = (weeklyPlan) => {
	let complete = [];
	weeklyPlan.forEach((day, index) => {
		day.forEach((excercise, i) => {
			complete.push(individualSet(excercise, i));
		});
	});
	return complete;
};

let workout = (weeklyPlan) => {
	let weeklyWorkout = {
		day: 1,
		workout: [
			{
				number: 1,
				excerciseName: weeklyPlan[0][0].name,
				sets: 3,
				complete: false,
			},
			{
				number: 2,
				excerciseName: weeklyPlan[0][1].name,
				sets: 3,
				complete: false,
			},
			{
				number: 3,
				excerciseName: weeklyPlan[0][2].name,
				sets: 3,
				complete: false,
			},
		],
	};

	return weeklyWorkout;
};
export { workout, testWorkout };
