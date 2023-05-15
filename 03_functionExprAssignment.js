console.log(`01.........Square of number.....................01`);
var square = function varg (num) {
    console.log(`Square of ${num} : ${num*num}`); 
}
square(5);
square(6);
square(25);
square(100);

console.log(`02.............Type of function...... ..........02`);
console.log(`Type of square : ${typeof square}`);

console.log(`03..............Area of Rectangal...............03`);
var area = function Rectangal(height, width) {
    console.log(`Area of given rectangle plot: ${height*width}`);   
}
area(499, 917);

console.log(`04................Swap..........................04`);
var swapValues = function swap(num1, num2) {
    console.log(`Before swap  num1 = ${num1}  num2 = ${num2}`);
    var temp;
    temp = num1;
    num1 = num2;
    num2 = temp;
    console.log(`After swap   num1 = ${num1}   num2 = ${num2}`) 
    console.log(`.............................................`);
}
swapValues("Virat", "Anushka");
swapValues(1000 , 2000);

console.log(`05...............String.........................05`);
var stringPerform = function string(givenString) {
    console.log(`A.Total character avaliable in the string: ${givenString.length}`);
    console.log(`B.Character at index 6 : ${givenString.charAt(6)}`);
    console.log(`C.Character at index 11 : ${givenString.charAt(11)}`);
    console.log(`D.Last Character of string : ${givenString.charAt(givenString.length-1)}`);
    console.log(`E.Very first Character of string : ${givenString.charAt(0)}`);
    var words = givenString.split(" ");
    console.log(`F.1.Total number words in string : ${words.length}`)
    console.log(`F.2.Square of total number of words in string: ${words.length*words.length}`);
}
   stringPerform("JS the most popular language of internate");



