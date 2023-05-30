const bankSbi = {
bankName : "State Bank Of India",
branch:"Pune",
ifsc: "SBI0004108",
accountNo: "32828742093",
interestRate: "6.50%",
}

const bankLocation = {
street:"Bund Garden Road",
city:"Pune",
pin:"411001",
}

const rateOfIntrest = {
homeLoanInterest:"6.70%",
personalLoanInterest:"10.50%",
dueInterest:"6.50%"
}
console.log(`==========================================1)Creating an object bankSbi===================================================`);
console.table(bankSbi);
console.log(`======================================2)Creating an object bankLocation==================================================`);

console.table(bankLocation);
console.log(`=======================================3)Clone object bankSbi and bankLocation===========================================`);
console.table(Object.assign(bankSbi, bankLocation));
console.log(`======================================4)Creating an object rateOfInterest================================================`);

console.table(rateOfIntrest);
console.log(`====================================5)Merge step 1, step 2,step 4 insbiDetails============================================`);
const sbiDetails = Object.assign({},bankSbi, bankLocation, rateOfIntrest);
console.table(sbiDetails);
console.log(`===============================================6)Traverse step 5==========================================================`);
for (const key in sbiDetails) { 
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const value = sbiDetails[key];
        console.log(`${key}: ${value}`);
    }
}