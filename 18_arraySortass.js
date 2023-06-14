const array = [10, 5, 'a', 'b', 'h', 11];
const number =[];
const alphabate =[];
console.log(`Given array`);
console.log(array);
console.log(`***********************************`);
array.sort();
array.sort((n1, n2) => {
    return n1 > n2 ? 1 : -1;
});
array.forEach((element)=> {
    if (typeof(element)=="string") {
        alphabate.push(element);
    } else {
        number.push(element);
    }
});




console.log(`Sorting of given array`);
console.log(array);
console.log(`***********************************`);


console.log(`Sorting of array by only alphabates`);
console.log(alphabate);
console.log(`***********************************`);

console.log(`Sorting of array by only numbers`);
console.log(number);