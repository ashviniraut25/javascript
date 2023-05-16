console.log(`01.............Gretest Number...............01`);
var greaterNumber = function (num1, num2) {
    console.log(`given numbers are ${num1}, ${num2}`);
    var result = num1>=num2 ? `${num1} is greater than ${num2}`: `${num2} is greater than ${num1}`;
    console.log(result);
    console.log(`...........................`);
}
greaterNumber(10, -10);
greaterNumber(800,899);

console.log(`02.............EVEN or ODD Number.............02`);
var isEvenOrOddNum = function (num) {
    var result = num%2 == 0? `${num} is Even number`: `${num} is Odd number`;
    console.log(result);
    console.log(`..........................`);
    
}
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);

console.log(`03.............Even or Odd length.............03`);
var wordLength = function (word) {
    var len = word.length;
    var result = len %2 == 0 ? `EVEN`: `ODD`;
    var returnValu = result;
    console.log(`${word} is ${returnValu} wordLength`);
    console.log(`.............................`);

}
wordLength("JavaScript");
wordLength("developer");
wordLength("Google");




