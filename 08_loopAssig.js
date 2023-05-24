
console.log(`1)Total number of vowels`);
var str = "I am very good IT Developer";
// a e i o u == A E I O U
var count = 0;

for (let index = 0; index < str.length; index++) {
  
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

for (let index = 1; index <= 5; index++) {
    var cube = index * index * index;
    result = result + cube;
}
console.log(`Sum of cube of numbers from 1 to 5==>${result}`);
console.log(`======================================================`);
console.log(`3)Odd position character`);



function oddPositionedChars(string) {
    console.log(`Given string : ${string}`);
    var str = "";
    for (let index = 0; index < string.length; index++) {
       var char = string.charAt(index);
        if (index%2!=0 && char !=" ") {
            str = str + char;
            
            
        }
        
    }
    console.log(`Odd position characters of string are : ${str}`);
    console.log(`.....................................................`);
}


oddPositionedChars( "Hard work always pays back");
oddPositionedChars("Soon I will be Angular IT Champ")
