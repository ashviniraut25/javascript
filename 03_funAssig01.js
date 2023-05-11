console.log("..............................................................................");
console.log("......................*Function without Arguments*.............................");
console.log("...................................................................................");
function message() {
    console.log("Ashvini Sanjay Raut");
}
function address(){
    console.log("Mavuli Niwas Karad,Dist:Satara");
}
message();
address();
console.log("..............................................................................");
console.log(".....................*Personal details with Arguments*......................... ");
console.log("..............................................................................");
function personalDetails(firstName, lastName , collegeName) {
    console.log("FirstName:",firstName,  "   LastName:", lastName, "  CollegeName:",collegeName); 
}
personalDetails("Ashvini", "Raut", "SKNSCOE");

console.log("..............................................................................");
console.log("..............................*Swap Values*...................................");
console.log("..............................................................................");
function swapValuesDude(value1, value2) {
    console.log("Before Swap:", "   Value1:",value1,"    Value2:",value2);
    var temp = value1;
    value1= value2;
    value2 = temp;
    console.log("After Swap:","    Value1:",value1,"    Value2:",value2);
}
swapValuesDude("Virat", "Anushka");
swapValuesDude(1000, 2000)


console.log("..............................................................................");
console.log("............................*Add three values*...................................");
console.log("..............................................................................");
function addThreeValues(num1, num2, num3) {
    var temp = num1 + num2 + num3;
    console.log("Addition=",temp);
}
addThreeValues(10.23, 600, 40);
addThreeValues("Hello"," Good"," Morning");