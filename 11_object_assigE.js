console.log(`============================SBI Bank=================================`);
let sbiBank = {
bankName: "State Bank Of INDIA",
location: "1319, Vijay Chambers, Sadashiv peth,Pune-30",
accountNo: "32828742093" ,
ifsc: "SBI0004108",
interestRate: "6.50%",
showDetails : function () {
console.log(`1)Bank Name: '${this.bankName}'  2)Location: '${this.location}'`);
console.log(`3)Account Number:'${this.accountNo}'  4)ifsc: '${this.ifsc}'   5)Interest Rate : '${this.interestRate}'`);
}
}
sbiBank.showDetails();
console.log(`===========================Axis Bank=================================`);

let axisBank = {
    bankName: "Axis Bank",
    location: "Sterling Plaza 1262/b, J M Road Deccan Gymkhana",
    accountNo: "928297420931234" ,
    ifsc: "UTIB0000037",
    interestRate: "6.25%",
    showDetails : function () {
    console.log(`1)Bank Name: '${this.bankName}'   2)Location: '${this.location}'`);
    console.log(`3)Account Number:'${this.accountNo}'  4)ifsc: '${this.ifsc}'   5)Interest Rate : '${this.interestRate}'`);
    }
    }
    axisBank.showDetails();

    console.log(`==========================HDFC Bank==================================`);
    let hdfcBank = {
        bankName: "HDFC Bank",
        location: "21/6, 1st Floor, MIT Marathon, Bund Garden Road ,Pune",
        accountNo: "8282974209313" ,
        ifsc: "HDFC0001210",
        interestRate: "6.75%",
        showDetails : function () {
        console.log(`1)Bank Name: '${this.bankName}'   2)Location: '${this.location}'`);
        console.log(`3)Account Number:'${this.accountNo}'  4)ifsc: '${this.ifsc}'   5)Interest Rate : '${this.interestRate}'`);
        }
        }
        hdfcBank.showDetails();

    
    console.log(`==========================YES Bank===================================`);
    let yesBank = {
        bankName: "YES Bank",
        location: "Shop No.1, Ivory Tower, Eradawane, Pune",
        accountNo: "752297420931234" ,
        ifsc: "YESB0000008",
        interestRate: "6.00%",
        showDetails : function () {
        console.log(`1)Bank Name: '${this.bankName}'   2)Location: '${this.location}'`);
        console.log(`3)Account Number:'${this.accountNo}'  4)ifsc: '${this.ifsc}'   5)Interest Rate : '${this.interestRate}'`);
        }
        }
        yesBank.showDetails();