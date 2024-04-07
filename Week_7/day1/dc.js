const makeAllCaps = (arr) => {
  return new Promise((resolve, reject) => {
    if (arr.every((word) => typeof word == "string")) {
      resolve(arr.map((item) => item.toUpperCase()));
    }
    reject("Error. Array is not exclusively strings");
  });
};

const sortWords = (arr) => {
  return new Promise((resolve, reject) => {
    if (arr.length > 4) {
      resolve(arr.sort());
    }
    reject("the array is less than 4 words");
  });
};

//in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

//in this example, you should see in the console,
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
  .catch((error) => console.log(error));

// part 2:

let morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`;

const toJs = () => {
  return new Promise((resolve, reject) => {
    if (JSON.parse(morse) == "") {
      reject("Error. JSON object provided is empty");
    }
    resolve(JSON.parse(morse));
  });
};

const toMorse = (morseJS) => {
  return new Promise((resolve, reject) => {
    let word = prompt("Enter a word you want to morse-ify");
    let arr = word.split("");
    let convertToMorse = [];
    arr.forEach((item) => {
      if (morseJS.hasOwnProperty(item)) {
        convertToMorse.push(morseJS[item]);
      } else {
        reject(`${item} is not in the morse alphabet`);
      }
    });
    resolve(convertToMorse);
  });
};

const joinWords = (morseTranslation) => {
  document.open();
  document.write(morseTranslation.join("<br>"));
  document.close();
};

toJs().then(toMorse).then(joinWords);
