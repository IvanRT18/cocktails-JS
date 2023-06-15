import get from "./getElement.js";
import { hideLoading } from "./toggleLoading.js";

const displaySingleDrink = (data) => {
  hideLoading();
  const drink = data.drinks[0];
  const { strDrink: name, strInstructions: descr, strDrinkThumb: img } = drink;
  const ingredients = [
    drink.strIngredient1,
    drink.strIngredient2,
    drink.strIngredient3,
    drink.strIngredient4,
    drink.strIngredient5,
  ];
  const singleDrink = get(".single-drink");
  const drinkName = get(".drink-name");
  const drinkDesc = get(".drink-desc");
  const drinkImg = get(".drink-img");
  const drinkIngredients = get(".drink-ingredients");

  drinkImg.src = img;
  drinkName.textContent = name;
  drinkDesc.textContent = descr;
  document.title = name;
  drinkIngredients.innerHTML = ingredients
    .map((item) => {
      if (!item) return;
      return `<li><i class="far fa-check-square"></i>${item}</li>`;
    })
    .join("");

  console.log(drinkIngredients, ingredients);

  singleDrink.innnerHTML = `<img src="${img}" alt="${name}" class="drink-img">
    <article class="drink-info">
      <h2 class="drink-name">${name}</h2>
      <p class="drink-desc">${descr}</p>
      <ul class="drink-ingredients"></ul>
      <a href="index.html" class="btn">all cocktails</a>
    </article>`;
};

export default displaySingleDrink;
