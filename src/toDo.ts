import { Task, Category } from "./types/types.js";
import renderTasks from "./helpers/render-tasks.helper.js";
import { render as renderCategories } from "./helpers/render-categories.helper.js";
import { TaskClass } from "./classes/task.js";

const tasksContainerElement: HTMLElement = document.querySelector(".tasks");
const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");
const categoryContainerElement: HTMLButtonElement =
  document.querySelector(".categories");

let selectedCategory: Category;

const categories: Category[] = [
  Category.GENERAL,
  Category.WORK,
  Category.GYM,
  Category.HOBBY,
  Category.SOCIAL,
];

const tasks: Task[] = [
  new Task("Wyrzucić śmieci", false, Category.GENERAL),
  new Task("Pójść na siłke", true, Category.GYM),
  new Task("Nakarmić koty", false),
];

const addTask = (task: Task) => {
  tasks.push(task);
};

const updateSelectedCategory = (newCategory: Category) => {
  selectedCategory = newCategory;
};

addButtonElement.addEventListener("click", (e) => {
  e.preventDefault();

  addTask(new Task(taskNameInputElement.value, false, selectedCategory));
  taskNameInputElement.value = "";
  renderTasks(tasks, tasksContainerElement);
});

type TaskAsTuple = [string, Category, boolean];

const task: TaskAsTuple = ["test", Category.GYM, false];
const taskName = task[0];
const taskCategory = task[1];
const taskDoneStatus = task[2];

renderCategories(categories, categoryContainerElement, updateSelectedCategory);
renderTasks(tasks, tasksContainerElement);

const taskClassInstance = new TaskClass(
  "Zadanie z konstruktora",
  false,
  Category.GYM
);

taskClassInstance.logCreationDate("!");
