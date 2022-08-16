let render = () => {
	let bottomRow = document.createElement("section");
	bottomRow.classList.add("row");
	bottomRow.classList.add("bottom");
	bottomRow.id = "days";
	bottomRow.style = "height: 4vw";
	bottomRow.textContent = "this is a bottom Row";

	let bottomCell = document.createElement("div");
	bottomCell.classList.add("col-2");
	bottomCell.classList.add("completed");
	bottomCell.textContent = "this is a cell in the row";

	bottomRow.appendChild(bottomCell);

	let bottomContainer = document.querySelector("#container-bottom");

	bottomContainer.appendChild(bottomRow);
};

export { render };
