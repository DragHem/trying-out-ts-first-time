import { Category } from "../types/types";

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
    });

    const labelInputElement: HTMLLabelElement = document.createElement("label");
    labelInputElement.setAttribute("for", `category-${category}`);
    labelInputElement.innerHTML = category;

    categoryElement.appendChild(radioInputElement);
    categoryElement.appendChild(labelInputElement);

    categoryContainerElement.appendChild(categoryElement);
  });
};
