import presentDrinks from "./src/presentDrinks.js";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=m";

window.addEventListener("DOMContentLoaded", () => {
  presentDrinks(url);
});
