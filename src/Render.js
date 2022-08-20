import { mainWorkout, fetchQuote } from "./FetchWorkouts";

let displayDailyWorkout = (week) => {
	document.getElementById("selected").innerHTML = week.dailyExcercises
		.map(
			(item, index) =>
				`
                <div>
                    <div data-bs-toggle="collapse" data-bs-target="#collapseExample${
						item.id
					}" aria-expanded="true" aria-controls="collapseExample"
                        data-id = ${item.id}>
                        ${index + 1}: ${item.excerciseName}
                        </div>
                    </div>

                    <div class="collapse" id="collapseExample${item.id}">
                        <div class="card card-body">
                        <img style = "height: 220px;" src = ${item.url}>
                    </div>  
                </div>
        `
		)
		.join("");
};

let displayQuote = (quote, author) => {
	let qouteDiv = document.querySelector("#quote");
	qouteDiv.textContent = `${quote} - ${author}`;
};

let displayWeeklyWorkout = (workout) => {
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

let render = (workout) => {
	displayWeeklyWorkout(workout);
};

export { render, displayWeeklyWorkout, displayDailyWorkout, displayQuote };
