import { Category } from "../types/types.js";

const handleCategoryChange = (category: Category) => {
  if (category === Category.GENERAL) console.log("Zmiana na genertal!");
  else if (category === Category.GYM) alert("Idziesz na siłkę?");
  else if (category === Category.HOBBY)
    document.body.style.backgroundColor = "lightgreen";
  else if (category === Category.WORK) {
    console.log("Zmiana na work!");
    alert("Praca praca, praca!");
    document.body.style.backgroundColor = "lightblue";
  } else if (category === Category.SOCIAL) {
    document.body.style.backgroundColor = "#ccc";
  } else {
    const never: never = category;
    console.log(never);
  }
};

export const render = (
  categories: Category[],
  categoryContainerElement: HTMLElement,
  inputChcangeCallback: (category: Category) => void
) => {
  categories.forEach((category) => {
    const categoryElement: HTMLElement = document.createElement("li");
    categoryElement.classList.add(category);

    const radioInputElement: HTMLInputElement = document.createElement("input");
    radioInputElement.type = "radio";
    radioInputElement.name = "category";
    radioInputElement.value = category;
    radioInputElement.id = `category-${category}`;
    radioInputElement.addEventListener("change", () => {
      inputChcangeCallback(category);
      handleCategoryChange(category);
    });

    const labelInputElement: HTMLLabelElement = document.createElement("label");
    labelInputElement.setAttribute("for", `category-${category}`);
    labelInputElement.innerHTML = category;

    categoryElement.appendChild(radioInputElement);
    categoryElement.appendChild(labelInputElement);

    categoryContainerElement.appendChild(categoryElement);
  });
};
