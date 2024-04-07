const compareToTen = (num) => {
  new Promise((resolve, reject) => {
    if (num < 10) {
      resolve(`${num} is less than 10`);
    }
    reject(`${num} is greater than 10`);
  })

    .then((result) => console.log(result))
    .catch((error) => console.log(error));
};

const timedResolve = () => {
  new Promise(() => {
    setTimeout(() => {
      return Promise.resolve(console.log("success"));
    }, 4000);
  }).catch((error) => console.log("error"));
};

const setThree = () => {
    Promise.resolve(3).then((result) => console.log(result));
}

const catchBoo = () => {
    Promise.reject("Boo!").catch((error) => console.log(error));
}


compareToTen(15);
compareToTen(8);
timedResolve();
setThree();
catchBoo();
