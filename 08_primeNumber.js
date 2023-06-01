

let isPrime = true;
var num2 ;
function primeNumber(num) {
for (let index = 2; index < num; index++) {
    if(num%index==0){
        isPrime = false;
        num2 = index;
         }
    
}
if (isPrime) {
    console.log(`Given number ${num} a Prime number`);    
}
else{
    console.log(`Given number ${num} is not a Prime number because it is devided by ${num2}`);

}
}
primeNumber(11);
primeNumber(4);
primeNumber(9);

