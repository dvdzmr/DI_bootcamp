// DC 1
const gameInfo = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"],
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"],
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"],
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"],
  },
];

const users = [];
const winners = [];
let score = 0;

gameInfo.forEach((player) => {
  users.push(player.username + "!");
});
console.log(users);

gameInfo.forEach((player) => {
  if (player.score > 5) {
    winners.push(player.username);
  }
});
console.log(winners);

gameInfo.forEach((player) => {
  score += player.score;
});
console.log("Total Score of Users:", score);

// DC 2
const inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  {
    id: 4,
    car_make: "Land Rover",
    car_model: "Defender Ice Edition",
    car_year: 2010,
  },
  { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];

function getCarHonda(carInventory) {
  let vehicle = carInventory.find((car) => car.car_make === "Honda");
  return `This is a :${vehicle.car_make} ${vehicle.car_model} from ${vehicle.car_year}`;
}
console.log(getCarHonda(inventory));

function sortCarInventoryByYear(carInventory) {
  return carInventory.sort(
    (car_one, car_two) => car_one.car_year - car_two.car_year
  );
}

const newinventory = sortCarInventoryByYear(inventory);
newinventory.forEach((car) => {
  console.log(`a ${car.car_make} ${car.car_model} from year ${car.car_year}`);
});
