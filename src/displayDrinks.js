import get from "./getElement.js";
import { hideLoading } from "./toggleLoading.js";

const displayDrinks = async ({ drinks }) => {
  const title = get(".title");
  const section = get(".section-center");
  if (!drinks) {
    hideLoading();
    title.textContent = "Sorry, no cocktails matched your search";
    section.innerHTML = null;
    return;
  } else {
    const newDrinks = drinks
      .map((drink) => {
        const { idDrink, strDrinkThumb: img, strDrink: name } = drink;
        return ` <a href="drink.html">
        <article class="cocktail" data-id="${idDrink}">
          <img src="${img}" alt="${name}">
          <h3>${name}</h3>
        </article>
      </a>`;
      })
      .join("");
    hideLoading();
    title.textContent = "";
    section.innerHTML = newDrinks;
    return section;
  }
};

export default displayDrinks;
