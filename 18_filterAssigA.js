const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log(arrayNumbers);
console.log(``);
console.log(`===========1)Find Numbers greater than 50 by filter method======`);
const greaterNum = arrayNumbers.filter((num) => {
    return num > 50;
})
console.log(`Numbers > 50 : "${greaterNum}"`);
console.log(``);
console.log(`=================2)Find all even by filter method===============`);
const evenNum = arrayNumbers.filter((num) => {
    return num % 2 == 0;
})
console.log(`Even numbers : "${evenNum}"`);
console.log(``);

console.log(`================3)Find odd Numbers by filter method==============`);
const oddNum = arrayNumbers.filter((num) => {
    return num % 2 != 0;
})
console.log(`Odd Numbers :"${oddNum}"`);
console.log(``);

console.log(`===========4)Find Numbers multiple og 5 by filter method=========`);
const multipleNum = arrayNumbers.filter((num) => {
    return num % 5 == 0;
})
console.log(`Numbers multiple of 5 :"${multipleNum}"`);
console.log(``);

console.log(`=====5)Find Numbers which are between 20 & 50 by filter method====`);
const betweenNum = arrayNumbers.filter((num) => {
    return (num < 50) && (num > 20)
})
console.log(`Numbers between 20 & 50 : "${betweenNum}"`);
console.log(``);