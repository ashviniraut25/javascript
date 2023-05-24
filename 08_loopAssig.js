
console.log(`1)Total number of vowels`);
var str = "I am very good IT Developer";
// a e i o u == A E I O U


for (let index = 0; index < str.length; index++) {
    var count = 0;
    var char = str.charAt(index);
    if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' ||
        char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {
        count++;
    }

}
console.log(`Given string:==>"${str}"`);
console.log(`Total number of vowels in given string:==> "${count}"`);

console.log(`======================================================`);
console.log(`2)Sum of cube`);
var result = 0;
var index = 1;
for (let index = 1; index <= 5; index++) {
    var cube = index * index * index;
    result = result + cube;
}
console.log(`Sum of cube of numbers from 1 to 5==>${result}`);
console.log(`======================================================`);
console.log(`3)Odd position character`);

var word = "Hard work always pays back";
// a e i o u == A E I O U
var string = "";
for (let index = 0; index < word.length; index + 2) {
    if (index % 2 == 0 && char != ' ') {
        var char = word.charAt(index);
        string = string.concat(char);

    }

}
console.log(`Out put string :${string}`);


