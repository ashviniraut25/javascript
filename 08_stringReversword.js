var str = "I am very good IT developer"; 
console.log(str);
var spl = str.split(" ");
console.log(spl.length);
count = " ";
for (let index = 6; index < 0; index--) {
    var char = spl.charAt(index); // 
    if (char =" ") {
        console.log(char);
    
        reverseString = reverseString.concat(char);
    }
    
}
console.log(`${count}`);


