const tasksContainerElement: HTMLElement = document.querySelector(".tasks");
const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");
const categoryContainerElement: HTMLButtonElement =
  document.querySelector(".categories");

let selectedCategory: Category;

type Category = "general" | "work" | "gym" | "hobby";

interface Task {
  name: string;
  done: boolean;
  category?: Category;
}

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

const render = () => {
  tasksContainerElement.innerHTML = "";
  tasks.forEach((task, index) => {
    const taskElement: HTMLElement = document.createElement("li");
    if (task.category) taskElement.classList.add(task.category);

    const id: string = `task-${index}`;
    const labelElement: HTMLLabelElement = document.createElement("label");
    labelElement.textContent = task.name;
    labelElement.setAttribute("for", id);

    const checkBoxElement: HTMLInputElement = document.createElement("input");
    checkBoxElement.type = "checkbox";
    checkBoxElement.name = task.name;
    checkBoxElement.id = id;
    checkBoxElement.checked = task.done;
    checkBoxElement.addEventListener("change", () => {
      task.done = !task.done;
    });

    taskElement.appendChild(labelElement);
    taskElement.appendChild(checkBoxElement);

    tasksContainerElement.appendChild(taskElement);
  });
};

const renderCategories = () => {
  categories.forEach((category) => {
    const categoryElement: HTMLElement = document.createElement("li");
    categoryElement.classList.add(category);

    const radioInputElement: HTMLInputElement = document.createElement("input");
    radioInputElement.type = "radio";
    radioInputElement.name = "category";
    radioInputElement.value = category;
    radioInputElement.id = `category-${category}`;
    radioInputElement.addEventListener("change", () => {
      selectedCategory = category;
    });

    const labelInputElement: HTMLLabelElement = document.createElement("label");
    labelInputElement.setAttribute("for", `category-${category}`);
    labelInputElement.innerHTML = category;

    categoryElement.appendChild(radioInputElement);
    categoryElement.appendChild(labelInputElement);

    categoryContainerElement.appendChild(categoryElement);
  });
};

const addTask = (task: Task) => {
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
  render();
});

addTask({ name: "test", category: "general", done: true });
renderCategories();
render();
