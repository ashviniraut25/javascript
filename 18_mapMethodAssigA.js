const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
console.log(`Given arrayNumber: ${arrayNumbers}`);
console.log(``);
console.log(`==================1)Add 10 into each array element==================`);
const arrayAdd = arrayNumbers.map( (element) => {
    return element+10;
} );
console.log(arrayAdd);
console.log(``);
console.log(`====================2)Square of each array element==================`);
const arraySquare = arrayNumbers.map( (element) => {
    return element*element;
} );
console.log(arraySquare);
console.log(``);
console.log(`====3)Add a index valu into its corresponding each array element====`);
const arrayAddIndex = arrayNumbers.map( (element, index) => {
    return element+index;
} );
console.log(arrayAddIndex);