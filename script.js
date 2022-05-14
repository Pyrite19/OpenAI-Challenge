submitButton = document.querySelector(".submit");
const pageContainer = document.querySelector(".pageContainer");
resultsHeadingOnPage = false;

submitButton.addEventListener("click", function (event) {
	if (resultsHeadingOnPage == false) {
		resultsHeadingOnPage = true;
		const resultsHeading = document.createElement("h2");
		resultsHeading.textContent = "Results";
		resultsHeading.classList.add("resultsHeading");
		pageContainer.appendChild(resultsHeading);
	}
	resultDiv();
});

function resultDiv() {
	const resultDiv = document.createElement("div");
	resultDiv.classList.add("resultDiv");

	inputHeading = document.createElement("h2");
	inputHeading.textContent = "Input:";
	resultDiv.appendChild(inputHeading);

	inputText = document.createElement("p");
	inputText.textContent = document.querySelector(".aiText").value;
	resultDiv.appendChild(inputText);


    outputHeading = document.createElement("h2");
    outputHeading.textContent = "Output:";
    resultDiv.appendChild(outputHeading);

    outputText = document.createElement("p");
    // insert output text here
    
	pageContainer.appendChild(resultDiv);
}
