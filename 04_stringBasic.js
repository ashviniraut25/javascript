function stringBasics() {
    console.log("My dream company name: Tata Consultancy servies");
    
}
console.log(".....................Assignment1..........................");
stringBasics();
var hobby1 = "Programming";
var hobby2 = "Travelling";
var hobby3 = "Dancing";
console.log("My Hobbies are:",  hobby1,  hobby2,  hobby3);
var result1 = hobby1.length;
console.log("Total Number of character in hobby1 are:",result1);
var result2 = hobby2.length;
console.log("Total Number of character in hobby2 are:",result2);
var result3 = hobby3.length;
console.log("Total Number of character in hobby3 are:",result3);
console.log("Total Number of character in hobby1 hobby2 hobby3 are:",result1+result2+result3);

console.log(".........................Assignment2........................");

function stringHandsOn(givenstring) {
    console.log("Given string is: ",givenstring);
    console.log("Total number of character in given string are:",givenstring.length);
    var string = givenstring.trim();
    console.log("Total number of character in given string after trim are:", string.length);
    console.log("Total number of extra spaces count removed in stape3 are:",givenstring.length-string.length);
    console.log("First and Last character on the string aftre trim are:",string.charAt(0),string.charAt(33));

    
}
var string = stringHandsOn("   Hey you are doing good, keep it up   ");







