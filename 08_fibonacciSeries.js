let n1 = 1;
let n2 = 2;
let nextNum;
console.log(`========Fibonacci Series========`);
for (let index = 1; index < 11; index++) {
    console.log(n1);
    nextNum = n1+n2;
    n1=n2;
    n2=nextNum;
    
}
