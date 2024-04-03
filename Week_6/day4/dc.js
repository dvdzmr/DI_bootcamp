document .querySelector("form") .addEventListener("submit", handleSubmit);

function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(document .querySelector("form"));  
    const formEntries = form.entries();
    const dataObject = Object.fromEntries(formEntries);
    const dataString = JSON.stringify(dataObject);
    const textElement = document.createElement("p");
    textElement.innerText = dataString;
    document.body.appendChild(textElement);
}