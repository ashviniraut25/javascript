const array = [10, 5, 'a', 'b', 'h', 11];
console.log(`Given array`);
console.log(array);
console.log(`***********************************`);
array.sort();
array.sort((n1, n2) => {
    return n1 > n2 ? 1 : -1;
});
console.log(`Sorting of given array`);
console.log(array);
console.log(`***********************************`);

const number = array.slice(3);
const alphabate = array.slice(0, 3);
console.log(`Sorting of array by only alphabates`);
console.log(alphabate);
console.log(`***********************************`);

console.log(`Sorting of array by only numbers`);
console.log(number);