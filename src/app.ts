// const input1: HTMLInputElement = document.querySelector("#input1");
// const input2: HTMLInputElement = document.querySelector("#input2");
// const btn = document.querySelector("button");
//
// const add = (num1: number, num2: number) => num1 + num2;
//
// btn.addEventListener("click", () => {
//   const sum = add(Number(input1.value), Number(input2.value));
//   console.log(sum);
// });

//Union types
// const logAge = (age: number | string) => {
//   console.log(`Siema am ${age} lat!`);
// };
//
// logAge(22);
// logAge("dwadzieścia dwa");
//
// let test: number | string | boolean;
// test = 22;
// test = "dwadzieścia";
// test = true;
// test = [];

//Example 2
// const btn = document.querySelector("button");
// const calculatePrice = (orginalPrice: number, hasDiscount: boolean) => {
//   return hasDiscount ? orginalPrice * 0.8 : orginalPrice;
// };
// btn.addEventListener("click", () => {
//   const orginalPrice: number = 50;
//   const hasDiscount: boolean =
//     new URLSearchParams(window.location.search).get("discount") === "true";
//
//   console.log(calculatePrice(orginalPrice, hasDiscount));
// });
