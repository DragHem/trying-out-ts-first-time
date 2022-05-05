import { Task, Category } from "./types/types.js";
import renderTasks from "./helpers/render-tasks.helper.js";
import { render as renderCategories } from "./helpers/render-categories.helper.js";
import { TaskClass } from "./classes/task.js";
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
    new Task("Wyrzucić śmieci", false, Category.GENERAL),
    new Task("Pójść na siłke", true, Category.GYM),
    new Task("Nakarmić koty", false),
];
const addTask = (task) => {
    tasks.push(task);
};
const updateSelectedCategory = (newCategory) => {
    selectedCategory = newCategory;
};
addButtonElement.addEventListener("click", (e) => {
    e.preventDefault();
    addTask(new Task(taskNameInputElement.value, false, selectedCategory));
    taskNameInputElement.value = "";
    renderTasks(tasks, tasksContainerElement);
});
const task = ["test", Category.GYM, false];
const taskName = task[0];
const taskCategory = task[1];
const taskDoneStatus = task[2];
renderCategories(categories, categoryContainerElement, updateSelectedCategory);
renderTasks(tasks, tasksContainerElement);
const taskClassInstance = new TaskClass("Zadanie z konstruktora", false, Category.GYM);
taskClassInstance.logCreationDate("!");
