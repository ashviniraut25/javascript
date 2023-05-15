function stringHandsOn(givenstring) {
    console.log("1.Given string is: ",givenstring);
    console.log("2.Total number of character in given string are:",givenstring.length);
    var string = givenstring.trim();
    console.log(`3.String after trim ${string}`);
    console.log("4.Total number of character in given string after trim are:", string.length);
    console.log("5.Total number of extra spaces count removed in stape3 are:",givenstring.length-string.length);
    console.log("6.First and Last character on the string aftre trim are:",string.charAt(0),string.charAt(33));
    var words = string.split(" ");
    console.log(`7.Total words avaliable in string ${words.length}`);
    console.log(`8.Index of word good : ${givenstring.search("good")}`);
    console.log(`9.Substring starting from index 22 using substring: ${string.substring(22, 40)}`);
    console.log(`10.Substring starting from index 22 using slice: ${string.slice(22, 40)}`);
    console.log(`11.Is string ends with word "up": ${ string.endsWith("up")}`);
    console.log(`12.Is string start with word "Hey": ${ string.startsWith("Hey")}`);

    
}
var string = stringHandsOn("   Hey you are doing good, keep it up   ");