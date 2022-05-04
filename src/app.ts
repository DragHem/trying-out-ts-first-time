let age: number = 22;
age = 23;
age = 31.5;

let ageAsString: string = "dwadzieścia dwa";
ageAsString = "dwanaście";
ageAsString = `${age}`;
console.log(ageAsString);

const add = (v1: number, v2: number) => v1 + v2;

console.log(add(10, 50));
