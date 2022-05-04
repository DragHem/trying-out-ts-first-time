const input1: HTMLInputElement = document.querySelector("#input1");
const input2: HTMLInputElement = document.querySelector("#input2");
const btn = document.querySelector("button");

const add = (num1: number, num2: number) => num1 + num2;

btn.addEventListener("click", () => {
  const sum = add(Number(input1.value), Number(input2.value));
  console.log(sum);
});
