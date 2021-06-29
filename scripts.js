const timePlaceholder = document.getElementById("time");
const time = new Date();

timePlaceholder.innerText = time;

const searchEngine = window.search.get();
console.log(searchEngine);

const searchBox = document.getElementById("search-box");
const searchKeyWord = searchBox.value
  .toLocaleLowerCase()
  .trim();

searchBox.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    // window.location.replace(
    //   `https://www.google.com/search?q=${searchKeyWord}&`
    // );
    console.log(searchKeyWord);
  }
});
