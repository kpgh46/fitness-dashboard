let render = (workout) => {
	let bottomContainer = document.querySelector("#container-bottom");
	bottomContainer.innerHTML = "";

	workout.forEach((week) => {
		let bottomRow = document.createElement("section");
		bottomRow.classList.add("row");
		bottomRow.classList.add("bottom");
		bottomRow.id = "days";
		bottomRow.style = "height: 10vw";
		week.forEach((day) => {
			let bottomCell = document.createElement("div");
			bottomCell.classList.add("col-2");
			bottomCell.classList.add("completed");
			bottomCell.innerHTML = `${day[0].bodyPart} & ${day[1].bodyPart}`;
			bottomRow.appendChild(bottomCell);
		});
		bottomContainer.appendChild(bottomRow);
	});

	// bottomRow.appendChild(bottomCell);
};

export { render };
