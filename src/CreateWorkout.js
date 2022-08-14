let individualSet = (arr, name, index) => {
	let set = {
		number: index,
		excerciseName: arr[0][0].name,
		sets: 3,
		complete: false,
	};
	return set;
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
export { workout };
