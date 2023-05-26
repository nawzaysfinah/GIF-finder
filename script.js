// Fetches a random GIF based on the search query
fetchGif("tornado");

function fetchGif(searchQuery) {
  const apiKey = "ARNGRyAV5a9AnxmSL8eS4EF3QKadwvy0"; // Replace with your GIPHY API key
  const url = ` https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${searchQuery}`;

  fetch(url, { mode: "cors" })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      const gifUrl = response.data.images.original.url;
      displayGif(gifUrl);
      return gifUrl;
    })
    .catch((error) => console.error("Error fetching GIF:", error));
}

// Displays the fetched GIF in the DOM
function displayGif(gifUrl) {
  const gifContainer = document.getElementById("gifContainer");
  gifContainer.innerHTML = `<img src="${gifUrl}" id="gif" alt="Random GIF">`;
}

// Event listener for the search button click
const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", () => {
  const searchInput = document.getElementById("searchInput");
  const searchQuery = searchInput.value;

  // Change DOM element
  const title = document.querySelector("h1");
  title.textContent = `show me some ${searchQuery} !`;

  // Change variable
  // You can use this variable in other parts of your JavaScript code
  // to perform additional actions based on the search query
  const search = searchQuery;

  fetchGif(searchQuery);
});

function getCurrentGifUrl() {
  var gifElement = document.getElementById("gif");
  return gifElement.src;
}

function downloadGif() {
  var url = getCurrentGifUrl();

  // create link element
  var link = document.createElement("a");
  link.href = url;
  link.download = "image.gif";

  // Dispatch a click event on the link element
  var event = new MouseEvent("click");
  link.dispatchEvent(event);
}

// Download button now brings you to GIPHY page
const downloadButton = document.getElementById("downloadButton");
downloadButton.addEventListener("click", downloadGif);

// const refreshButton = document.getElementById("refresh");
// refreshButton.addEventListener("click", refresh);

// function refresh() {}
