const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const btn = document.querySelector("button");
const add = (num1, num2) => num1 + num2;
btn.addEventListener("click", () => {
    const sum = add(Number(input1.value), Number(input2.value));
    console.log(sum);
});
