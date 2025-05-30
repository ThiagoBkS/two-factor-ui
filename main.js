const inputs = document.querySelectorAll("[data-index]");
inputs.forEach((input) => input.addEventListener("keydown", handleInputEvent));

function handleInputEvent(event) {
	const dataIndex = Number(event.target.dataset.index);

	if (event.code === "Backspace") {
		if (event.target.value) {
			event.target.value = "";
		} else if (inputs[dataIndex - 1]) {
			inputs[dataIndex - 1].focus();
			inputs[dataIndex - 1].value = "";
		}
	} else if (/^[0-9]$/.test(event.key)) {
		event.target.value = event.key;
		if (inputs[dataIndex + 1]) inputs[dataIndex + 1].focus();
		event.preventDefault();
	}

	const result = Array.from(inputs).filter((input) => input.value);
	result.length == inputs.length ? showButton() : hiddenButton();
}

function showButton() {
	document.querySelector(".auth-button").classList.remove("hidden");
}

function hiddenButton() {
	document.querySelector(".auth-button").classList.add("hidden");
}
