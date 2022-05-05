import { Task, Category } from "./types/types";
import renderTasks from "./helpers/render-tasks.helper.js";
import { render as renderCategories } from "./helpers/render-categories.helper.js";

const tasksContainerElement: HTMLElement = document.querySelector(".tasks");
const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");
const categoryContainerElement: HTMLButtonElement =
  document.querySelector(".categories");

let selectedCategory: Category;

const categories: Category[] = ["general", "work", "gym", "hobby"];

const tasks: Task[] = [
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

const addTask = (task: Task) => {
  tasks.push(task);
};

const updateSelectedCategory = (newCategory: Category) => {
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

addTask({ name: "test", category: "general", done: true });
renderCategories(categories, categoryContainerElement, updateSelectedCategory);
renderTasks(tasks, tasksContainerElement);
