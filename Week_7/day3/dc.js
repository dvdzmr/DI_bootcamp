const myForm = document.forms[0];
const apiKey = "67e4f60b8aba910b5fb47978";
const apiUrl = "https://v6.exchangerate-api.com/v6/";

const convertObject = {
  sourceCurrency: "",
  targetCurrency: "",
  amount: 0,
};

let convertUrl = "";

const loadList = async () => {
  let url = `${apiUrl}${apiKey}/codes`;
  let res = await fetch(url);
  let resJson = await res.json();
  resJson.supported_codes.forEach((arr) => {
    let newOption = document.createElement("option");
    let optionText = document.createTextNode(`${arr[0]} - ${arr[1]}`);
    newOption.appendChild(optionText);
    newOption.value = arr[0];
    let newOptionSecond = newOption.cloneNode(true);
    myForm.querySelector("#currencyOne").appendChild(newOption);
    myForm.querySelector("#currencyTwo").appendChild(newOptionSecond);
  });
};


const getConversion = async () => {
  while (document.querySelector("#conversion").firstChild) {
    document
      .querySelector("#conversion")
      .removeChild(document.querySelector("#conversion").firstChild);
  }
  let res = await fetch(convertUrl);
  let resJson = await res.json();
  let conversionResult = `${Number(resJson.conversion_result).toFixed(2)} ${
    convertObject.targetCurrency
  }`;
  let conversionResultText = document.createTextNode(conversionResult);
  document.querySelector("#conversion").appendChild(conversionResultText);
  return resJson;
};

const reverseConversion = () => {
  while (document.querySelector("#conversion").firstChild) {
    document
      .querySelector("#conversion")
      .removeChild(document.querySelector("#conversion").firstChild);
  }
  convertObject.sourceCurrency =
    document.querySelector("#currencyTwo").value;
  convertObject.targetCurrency = document.querySelector("#currencyOne").value;
  convertUrl = `${apiUrl}${apiKey}/pair/${convertObject.sourceCurrency}/${convertObject.targetCurrency}/${convertObject.amount}`;
  getConversion();
  document.querySelector("#currencyOne").value = convertObject.sourceCurrency;
  document.querySelector("#currencyTwo").value =
    convertObject.targetCurrency;
};

myForm.addEventListener("load", loadList());
myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  convertObject.sourceCurrency = document.querySelector("#currencyOne").value;
  convertObject.targetCurrency =
    document.querySelector("#currencyTwo").value;
  convertObject.amount = document.querySelector("#amount").value;
  convertUrl = `${apiUrl}${apiKey}/pair/${convertObject.sourceCurrency}/${convertObject.targetCurrency}/${convertObject.amount}`;
  getConversion();
});

myForm.querySelector("#reverseConvert").addEventListener("click", (e) => {
  e.preventDefault();
  reverseConversion();
});