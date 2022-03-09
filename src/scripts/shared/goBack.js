export function activateGoBackBtn() {
	const previousBtn = document.getElementsByClassName("previous")[0];
	previousBtn.addEventListener("click", () => {
		history.back();
	});
}
