const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const myGif = document.getElementById("myGif");
const userSearch = document.getElementById("userSearch");
const gifContainer = document.getElementById("gifContainer");
const deleteButton = document.getElementById("deleteButton");

const fetchRandomGif = async (search) => {
  const url = `https://api.giphy.com/v1/gifs/random?tag=${search}&api_key=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();
  return data.data;
};

const appendGif = (data) => {
  const gifUrl = data.images.original.url;

  const gifElement = document.createElement("div");
  gifElement.classList.add("gif-item");

  const gifImage = document.createElement("img");
  gifImage.src = gifUrl;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    gifElement.remove();
  });

  gifElement.appendChild(gifImage);
  gifElement.appendChild(deleteButton);
  gifContainer.appendChild(gifElement);
};

myGif.addEventListener("submit", async (event) => {
  event.preventDefault();
  const search = userSearch.value.trim();
  if (search) {
    const gifData = await fetchRandomGif(search);
    appendGif(gifData);
    userSearch.value = "";
  }
});

deleteButton.addEventListener("click", () => {
  gifContainer.innerHTML = "";
});