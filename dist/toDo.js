import { Category } from "./types/types.js";
import renderTasks from "./helpers/render-tasks.helper.js";
import { render as renderCategories } from "./helpers/render-categories.helper.js";
const tasksContainerElement = document.querySelector(".tasks");
const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const categoryContainerElement = document.querySelector(".categories");
let selectedCategory;
const categories = [
    Category.GENERAL,
    Category.WORK,
    Category.GYM,
    Category.HOBBY,
    Category.SOCIAL,
];
const tasks = [
    {
        name: "Wyrzucić śmieci",
        done: false,
        category: Category.GENERAL,
    },
    {
        name: "Pójść na siłke",
        done: true,
        category: Category.GYM,
    },
    {
        name: "Nakarmić koty",
        done: false,
        category: Category.WORK,
    },
];
const addTask = (task) => {
    tasks.push(task);
};
const updateSelectedCategory = (newCategory) => {
    selectedCategory = newCategory;
};
addButtonElement.addEventListener("click", (e) => {
    e.preventDefault();
    addTask({
        name: taskNameInputElement.value,
        done: false,
        category: selectedCategory,
    });
    taskNameInputElement.value = "";
    renderTasks(tasks, tasksContainerElement);
});
addTask({ name: "test", category: Category.GENERAL, done: true });
renderCategories(categories, categoryContainerElement, updateSelectedCategory);
renderTasks(tasks, tasksContainerElement);
