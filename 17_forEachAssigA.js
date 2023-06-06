const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
console.log(`Given arrayNumber : ${arrayNumbers}`);
console.log(``);
console.log(`=======1)Log array element with its index====`);
arrayNumbers.forEach((element, index) => {
    console.log(index, element)
});
console.log(``);
console.log(`============2)Find Positive Numbers==========`);
arrayNumbers.forEach(element => {
    if (element > 0) {
        console.log(element);
    }
});

console.log(``);
console.log(`===========3)Find Negative Numbers==========`);
const arrayNew = [];
arrayNumbers.forEach(element => {
    if (element < 0) {
        arrayNew.push(element);
    }
});
console.log(arrayNew);

console.log(``);
console.log(`=============4)Find Even Numbers=============`);
arrayNumbers.forEach(element => {
    if (element % 2 == 0) {
        console.log(element);
    }
});

console.log(``);
console.log(`=========5)Find Sum of all numbers===========`);
let result = 0;
arrayNumbers.forEach(element => {
    result = result + element;
});
console.log(`Sum of all Numbers : ${result}`);

console.log(``);
console.log(`========6)Only Even Index Array Valu========`);
arrayNumbers.forEach((element, index) => {
    if (index % 2 == 0) {
        console.log(index, element);
    }
});

