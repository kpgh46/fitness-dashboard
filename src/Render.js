import { mainWorkout } from "./FetchWorkouts";

let clickCell = () => {
	document.addEventListener("click", (e) => {
		let el = e.target;
		if (e.target.id === "cell") {
			let { 0: week, 1: day } = el.dataset.id.split("");
			let currentWeek = mainWorkout[week][day];
			document.getElementById("selected").innerHTML =
				currentWeek.dailyExcercises
					.map(
						(item, index) =>
							`
                <div>
                    <div data-bs-toggle="collapse" data-bs-target="#collapseExample${
						item.id
					}" aria-expanded="true" aria-controls="collapseExample" data-id = ${
								item.id
							}>${index + 1}: ${item.excerciseName}</div>
                </div>
                <div class="collapse" id="collapseExample${item.id}">
                    <div class="card card-body">
                        <img style = "height: 220px;" src = ${item.url}>
                     </div>
                </div>
                `
					)
					.join("");
		}
	});
};

let displayWorkout = (workout) => {
	let bottomContainer = document.querySelector("#workout-container");
	bottomContainer.innerHTML = "";

	workout.forEach((week, weeki) => {
		let bottomRow = document.createElement("section");
		bottomRow.classList.add("row");
		bottomRow.classList.add("bottom");
		bottomRow.id = "days";
		bottomRow.style = "height: 10vw";
		week.forEach((day, dayi) => {
			let bottomCell = document.createElement("div");
			bottomCell.classList.add("col-2");
			bottomCell.classList.add("completed");
			if (day.complete === true) {
				bottomCell.classList.add("markComplete");
			}
			bottomCell.dataset.id = `${weeki}${dayi}`;
			bottomCell.id = "cell";
			bottomCell.innerHTML = `${day.dailyExcercises[0].bodyPart} & ${day.dailyExcercises[1].bodyPart}`;
			let completeBtn = document.createElement("button");
			completeBtn.classList.add("btn");
			completeBtn.classList.add("btn-primary");
			completeBtn.classList.add("btn-sm");
			completeBtn.textContent = "Complete";
			completeBtn.dataset.id = `${weeki}${dayi}`;
			completeBtn.id = "complete";
			bottomCell.appendChild(completeBtn);
			bottomRow.appendChild(bottomCell);
		});
		bottomContainer.appendChild(bottomRow);
	});
};
let weeksCompletedCount = 0;

let weeksComplete = (workout) => {
	let weeksCompleted = document.querySelector("#weeks-completed");
	workout.forEach((week) => {
		let checkIfAllComplete = week.every((item) => {
			return item.complete;
		});
		console.log(checkIfAllComplete);

		if (checkIfAllComplete) {
			weeksCompletedCount++;
		}
		// console.log(day.complete);
	});
	weeksCompletedCount++;
	weeksCompleted.textContent = 0;
};

let render = (workout) => {
	displayWorkout(workout);
	clickCell();
	clickCompleteBtn();
	if (mainWorkout.length > 0) {
		weeksComplete(workout);
	}
};

export { render, displayWorkout };
