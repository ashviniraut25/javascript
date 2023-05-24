

for (let index = 190; index >=19; index=index-19) {
  console.log(index);
    
}

for (let index = 8; index <=80; index=index+8) {
  console.log(index);
    
}

// JavaScript = J a v a S c r  i  p  t
var str = "JavaScript"; // 9
for (let index = 0; index < str.length; index++) { // 0  1   2
     var char = str.charAt(index); // J  a v
     console.log(char); 
}

// JavaScript = J a v a S c r  i  p  t
//RVERESE THE STRING = t p i r c S a v a J
var str = "JavaScript"; // 9
var reverseString = "";
for (let index = (str.length-1); index >=0; index--) { // 9 8 7
     var char = str.charAt(index); // t p i
    reverseString = reverseString.concat(char);
   
}
console.log(reverseString);



var word = "JavaScript Language Of Internet";
// a e i o u == A E I O U
var count = 0;
for (let index = 0; index < word.length; index++) {
    var char = word.charAt(index); // 
    if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || 
        char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {
        console.log(char);
        count++;
    }
    
}
console.log(`Count total vowels: ${count}`);

