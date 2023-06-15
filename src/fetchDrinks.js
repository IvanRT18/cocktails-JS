import { showLoading } from "./toggleLoading.js";

const fetchDrinks = async (url) => {
  showLoading();
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.drinks) {
      sortArray(data.drinks);
    }
    return data;
  } catch (error) {
    throw new Error(`There was an error: ${error}`);
  }
};

const sortArray = (array) => {
  array.sort(function (a, b) {
    if (a.strDrink < b.strDrink) {
      return -1;
    }
    if (a.strDrink > b.strDrink) {
      return 1;
    }
    return 0;
  });
};

export default fetchDrinks;
