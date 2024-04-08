const giphy =
  "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

const getGif = async () => {
  try {
    const response = await fetch(giphy);
    if (!response.ok) {
      throw new Error("Network Error");
    }
    const payload = await response.json();
    console.log(payload);
  } catch (error) {
    console.error(`Fetch Error: ${error}`);
  }
};

const moreGifs = async () => {
  try {
    const response = await fetch(
      "https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const payload = await response.json();
    console.log(payload);
  } catch (error) {
    console.error(`Fetch Error: ${error}`);
  }
};

const starShips = async () => {
  try {
    const response = await fetch("https://www.swapi.tech/api/starships/9/");

    if (!response.ok) {
      throw new Error("Network Error");
    }

    const payload = await response.json();
    console.log(payload);
  } catch (error) {
    console.error(`Fetch Error: ${error}`);
  }
};


getGif();
moreGifs();
starShips();
// 'calling' and then 'resolved'
