const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];

console.log("====1)Find out the sum of salary of all Numbers====== ");

const sumNumbers = arrayNumbers.reduce((runningTotal, value) => {
    return runningTotal + value;
});
console.log(`Total sum of given arrayNumbers : '${sumNumbers}'`);
console.log(``);
console.log("====2)Find the numbers multiple of 5 and then sum==== ");
const arrayNum5 = [];
const num = arrayNumbers.filter((num1) => {
    return num1 % 5 == 0;
});
console.log(`Arraynumbers multiple of 5 : ${num}`);

const sumNumbers1 = num.reduce((runningTotal1, value1) => {
    return runningTotal1 + value1;
});
console.log(`Total sum of given arrayNumbers multiple of 5 : '${sumNumbers1}'`);