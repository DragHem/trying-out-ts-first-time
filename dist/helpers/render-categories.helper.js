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
        });
        const labelInputElement = document.createElement("label");
        labelInputElement.setAttribute("for", `category-${category}`);
        labelInputElement.innerHTML = category;
        categoryElement.appendChild(radioInputElement);
        categoryElement.appendChild(labelInputElement);
        categoryContainerElement.appendChild(categoryElement);
    });
};
