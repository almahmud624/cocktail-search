const gettingInputValue = () => {
  const value = document.getElementById("search-field").value;
  document.getElementById("search-field").value = "";
  if(value.length === 1) {
    gettingCocktailDataSingleletter(value);
  }else {
    gettingCocktailDataMultiletter(value);
}
};

const gettingCocktailDataMultiletter = async (inputValue) => {
  const res = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`
  );
  const data = await res.json();
  displayCocktail(data.drinks);
};
const gettingCocktailDataSingleletter = async (inputValue) => {
  const res = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${inputValue}`
  );
  const data = await res.json();
  displayCocktail(data.drinks);
};

const displayCocktail = (cocktails) => {
  const cocktailsContainer = document.getElementById("cocktails");
  cocktailsContainer.textContent = '';
  cocktails.forEach((cocktail) => {
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
        <div class="card h-100">
            <img src="${cocktail.strDrinkThumb}" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">${cocktail.strDrink}</h5>
                <p class="card-text">
                    ${cocktail.strInstructions.slice(0, 150)}
                </p>
            </div>
        </div>
        `;
        cocktailsContainer.appendChild(div);
  });
};
