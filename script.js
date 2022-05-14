//Initial values that I either deem necessary or helpful to be globally declared
submitButton = document.querySelector(".submit");
const pageContainer = document.querySelector(".pageContainer");
const key = "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"
resultsHeadingOnPage = false;
const resultsContainer = document.querySelector(".resultsContainer");

// Button logic, basically creates everything below the submit button and makes a call to the api with whats in the textbox.
submitButton.addEventListener("click", function (event) {
	if (resultsHeadingOnPage == false) {
		resultsHeadingOnPage = true;
		const resultsHeading = document.createElement("h1");
		resultsHeading.textContent = "Results";
		resultsHeading.classList.add("resultsHeading");
		pageContainer.insertBefore(resultsHeading, resultsContainer);
	}
	getResponse(document.querySelector(".aiText").value);
});

//Building the divs for the results to display in
function resultDiv(result) {
	var input = document.querySelector(".aiText").value;
	const resultDiv = document.createElement("div");
	resultDiv.classList.add("resultDiv");

	inputHeading = document.createElement("h2");
	inputHeading.textContent = "Input:";
	resultDiv.appendChild(inputHeading);

	inputText = document.createElement("p");
	inputText.textContent = input;
	resultDiv.appendChild(inputText);

	outputHeading = document.createElement("h2");
	outputHeading.textContent = "Output:";
	resultDiv.appendChild(outputHeading);

	outputText = document.createElement("p");
	outputText.textContent = result;
	resultDiv.appendChild(outputText);

	resultsContainer.prepend(resultDiv);
}

// This is what actually calls to the OpenAI API
function getResponse(input) {
	const APIData = {
		prompt: input,
		temperature: 0.5,
		max_tokens: 200,
		top_p: 1.0,
		frequency_penalty: 0.0,
		presence_penalty: 0.0,
	};

	fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${key}`,
		},
		body: JSON.stringify(APIData),
	})
		.then((response) => response.json())
		.then((responseJSON) => {
			responseText = JSON.stringify(responseJSON.choices[0]);
			finalResponse = responseText.slice(13, responseText.length - 51);
            resultDiv(finalResponse);
		});
}

//Silly character counter I threw together
textCounter = document.querySelector(".textCount");
counterDiv = document.querySelector(".counterDiv");

window.addEventListener("keyup", function (event) {
	currentCount = document.querySelector(".aiText").value.length;
	textCounter.textContent = currentCount;
	counterDiv.prepend(textCounter);
});
