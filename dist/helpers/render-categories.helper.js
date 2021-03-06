import { Category } from "../types/types.js";
const handleCategoryChange = (category) => {
    if (category === Category.GENERAL)
        console.log("Zmiana na genertal!");
    else if (category === Category.GYM)
        alert("Idziesz na siłkę?");
    else if (category === Category.HOBBY)
        document.body.style.backgroundColor = "lightgreen";
    else if (category === Category.WORK) {
        console.log("Zmiana na work!");
        alert("Praca praca, praca!");
        document.body.style.backgroundColor = "lightblue";
    }
    else if (category === Category.SOCIAL) {
        document.body.style.backgroundColor = "#ccc";
    }
    else {
        const never = category;
        console.log(never);
    }
};
export const render = (categories, categoryContainerElement, inputChcangeCallback) => {
    categories.forEach((category) => {
        const categoryElement = document.createElement("li");
        categoryElement.classList.add(category);
        const radioInputElement = document.createElement("input");
        radioInputElement.type = "radio";
        radioInputElement.name = "category";
        radioInputElement.value = category;
        radioInputElement.id = `category-${category}`;
        radioInputElement.addEventListener("change", () => {
            inputChcangeCallback(category);
            handleCategoryChange(category);
        });
        const labelInputElement = document.createElement("label");
        labelInputElement.setAttribute("for", `category-${category}`);
        labelInputElement.innerHTML = category;
        categoryElement.appendChild(radioInputElement);
        categoryElement.appendChild(labelInputElement);
        categoryContainerElement.appendChild(categoryElement);
    });
};
