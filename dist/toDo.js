import renderTasks from "./helpers/render-tasks.helper.js";
import { render as renderCategories } from "./helpers/render-categories.helper.js";
const tasksContainerElement = document.querySelector(".tasks");
const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const categoryContainerElement = document.querySelector(".categories");
let selectedCategory;
const categories = ["general", "work", "gym", "hobby"];
const tasks = [
    {
        name: "Wyrzucić śmieci",
        done: false,
        category: "general",
    },
    {
        name: "Pójść na siłke",
        done: true,
        category: "gym",
    },
    {
        name: "Nakarmić koty",
        done: false,
        category: "work",
    },
];
const addTask = (task) => {
    tasks.push(task);
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
addTask({ name: "test", category: "general", done: true });
renderCategories(categories, categoryContainerElement, selectedCategory);
renderTasks(tasks, tasksContainerElement);
