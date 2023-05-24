const arrayNumber = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`Given Array :`);
console.log(arrayNumber);
console.log(`........................................................`);

console.log(`1)Total number of elements in given array : "${arrayNumber.length}"`);

console.log(`........................................................`);
console.log(`2)First element in array : "${arrayNumber[0]}" and Last element in array : "${arrayNumber[arrayNumber.length - 1]}"`);
console.log(`........................................................`);

console.log(`3)Third last element in array : "${arrayNumber[arrayNumber.length - 3]}"`);
console.log(`........................................................`);

console.log(`4)All even numbers....`);
for (const index in arrayNumber) {
    const element = arrayNumber[index];
    if (element % 2 == 0) {
        console.log(`EVEN number: "${arrayNumber[index]}"`);
    }
}
console.log(`........................................................`);

console.log(`5)All odd numbers....`);
for (const index in arrayNumber) {
    const element = arrayNumber[index];
    if (element % 2 != 0) {
        console.log(`ODD number: "${arrayNumber[index]}"`);
    }
}
console.log(`........................................................`);

var result = 0;
for (const index in arrayNumber) {
    if (index%2==0) {
     result = result + arrayNumber[index];
    }
 }
 console.log(`6)Even positioned numbers addition is : "${result}"`);
console.log(`........................................................`);

 var result1 = 0;
for (const index in arrayNumber) {
    if (index%2!=0) {
     result1 = result1 + arrayNumber[index];
    }
 }
 
 console.log(`7)Odd positioned numbers addition is : "${result1}"`);
console.log(`........................................................`);

 
 var result3 = 0;
for (const index in arrayNumber) {
     result3 = result3 + arrayNumber[index];
 }
 console.log(`8)Sum of all elements from arrayNumbers : "${result3}"`);
console.log(`........................................................`);

console.log(`9)Numbers multiple of 5 are:`);
 for (const index in arrayNumber) {
    const element = arrayNumber[index];
    if (element % 5 == 0) {
        console.log(`Number: "${arrayNumber[index]}"`);
    }
}
console.log(`........................................................`);

console.log(`10)Number 115 is available in array : "${arrayNumber.includes(115)}"`);
console.log(`........................................................`);
console.log(`11)Number 23 is available in array : "${arrayNumber.includes(23)}"`);
console.log(`........................................................`);
console.log(`12)Insert numbers 55,66 before index 3:`);
arrayNumber.splice(3, 0, 55, 66);
console.log(arrayNumber);
console.log(`........................................................`);

console.log(`13)Delet 3 element starting from index 4:`);
arrayNumber.splice(4, 3);
console.log(arrayNumber);



