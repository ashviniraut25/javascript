console.log(`1)Print numbers from 5 to 15 by incrementing 1:`);
let i = 5;
while (i<=15) {
    console.log(i);
    i++;
}
console.log(`2)Print numbers from 50 to 40 by decrementing by 1:`);
let j = 50;
while (j>=40) {
    console.log(j);
    j--;
}

console.log(`3)Find first 15 Odd numbers:`);
let k = 1;
while (k<=30) {
    if (k%2!=0) {
        console.log(k);
    }
    k++;
}

console.log(`4)Find first 10 Even numbers:`);
let l = 0;
while (l<20) {
    if (l%2 == 0) {
        console.log(l);
    }
    l++;
}

console.log(`5)Table of 5:`);
let m = 5;
while (m<=50) {
    console.log(m);
    m = m +5;
    }

    console.log(`6)Table of 10:`);
    let n = 10;
    while (n<=100) {
        console.log(n);
        n = n + 10;
    }

    console.log(`7)Table of 10 in reverse order:`);
    let o = 100;
    while (o>=10) {
        console.log(o);
        o = o - 10;
 }