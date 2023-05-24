const arrayFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];

console.log(`1)Given array is:`);
console.log(arrayFruits);
console.log(`.......................................................................`);

console.log(`2)Ading Papaya:`);
arrayFruits.unshift("Papaya");
console.log(arrayFruits);
console.log(`........................................................................`);

console.log(`3)Removing Mango`);
arrayFruits.splice(4, 1);
console.log(arrayFruits);
console.log(`........................................................................`);

console.log(`4)Insert Pineapple at last`);
arrayFruits.push("Pineapple");
console.log(arrayFruits);
console.log(`........................................................................`);

console.log(`5)Insert Dragon Fruit before Water Melon`);
arrayFruits.splice(4, 0, "Dragon Fruit");
console.log(arrayFruits);
console.log(`........................................................................`);

console.log(`6)Replace Orange with Kiwi`);
arrayFruits.splice(2, 1, "Kiwi");
console.log(arrayFruits);
console.log(`........................................................................`);

console.log(`7)log element starting from index 1 to 4`);
const slice = arrayFruits.slice(1, 5);
console.log(slice);
console.log(`........................................................................`);
console.log(`8)Last 3 element log on consol by using length property`);
const length = arrayFruits[(arrayFruits.length-1)];
console.log(`Last element of array: "${length}"`);
const length1 = arrayFruits[(arrayFruits.length-2)];
console.log(`Second Last element of array: "${length1}"`);
const length2 = arrayFruits[(arrayFruits.length-3)];
console.log(`Third Last element of array: "${length2}"`);




