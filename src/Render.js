import { mainWorkout } from "./FetchWorkouts";

let clickCell = () => {
	document.addEventListener("click", (e) => {
		let el = e.target;
		if (e.target.id === "cell") {
			let currentWeek = mainWorkout[0][1];
			document.getElementById("selected").innerHTML = currentWeek
				.map(
					(item) =>
						`
                <div>
                    <div> ${item.bodyPart}</div>
                    <div> ${item.excerciseName}</div>
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
			bottomCell.dataset.id = `${weeki}${dayi}`;
			bottomCell.id = "cell";
			bottomCell.innerHTML = `${day[0].bodyPart} & ${day[1].bodyPart}`;
			bottomRow.appendChild(bottomCell);
		});
		bottomContainer.appendChild(bottomRow);
	});
};

let render = (workout) => {
	displayWorkout(workout);
	clickCell();
};

export { render };
