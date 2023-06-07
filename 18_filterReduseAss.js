class Employee {
    constructor(empId, empName, empDept, empSalary, empCompany) {
        this.empId = empId;
        this.empName = empName;
        this.empDept = empDept;
        this.empSalary = empSalary;
        this.empCompany = empCompany
    }
}
const empAnil = new Employee(22, "Anil", "IT", 50000, "TCS");
const empRadha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const empRishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const empSonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const empMonika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const empViny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const empMahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmps = [empAnil, empRadha, empRishi, empSonali, empMonika, empViny, empMahi];

console.log(`=============1)All employess from "Wipro" company=================`);
const arrayWiproEmpl = arrayEmps.filter((employee) => {
    return employee.empCompany == "Wipro";
});
const arrayName = arrayWiproEmpl.map((employee1) => {
    return employee1.empName;
});
console.log(arrayName);

console.log(``);
console.log(`============2)All employess from "IT" or "HR" department===========`);
const arrayITHREmpl = arrayEmps.filter((employee) => {
    return employee.empDept == "IT" || employee.empDept == "HR";
});
const arrayName1 = arrayITHREmpl.map((employee1) => {
    return employee1.empName;

});
console.log(arrayName1);

console.log(``);
console.log(`===========3)All employess whose employee ID > 50==================`);
const arrayId = arrayEmps.filter((employee) => {
    return employee.empId > 50;
});
const arrayID = arrayId.map((employee1) => {
    return employee1.empName;

});
console.log(arrayID);
console.log(``);

console.log(`======4)Find the employees name start with letters 'A','V','M'=====`);
const arrayIni = arrayEmps.filter((employee) => {
    if (employee.empName.startsWith("A") || employee.empName.startsWith("V") || employee.empName.startsWith("M")) {
        return employee.empName;
    }

});
const arrayName2 = arrayIni.map((employee) => {
    return employee.empName;
});
console.log(arrayName2);

console.log(``);
console.log(`================5)All employess average salary====================`);

const arraySalaries = arrayEmps.map((employee) => {
    return employee.empSalary;
});
const sumSalary = arraySalaries.reduce((runningTotal, value) => {
    return runningTotal + value;
});
let avgSalary = sumSalary / arraySalaries.length;
console.log(`Average Salary of employess for all department :${avgSalary}`);

console.log(``);
console.log(`================6)Average salary for IT department================`);
const arrayOnlyIT = arrayEmps.filter((emplooyes) => {
    if (emplooyes.empDept == "IT") {
        return emplooyes.empSalary;
    }
});

const arrayName3 = arrayOnlyIT.map((employee) => {
    return employee.empSalary;
});
const sumSalary2 = arrayName3.reduce((runningTotal, value) => {
    return runningTotal + value;
});

let avgSalary1 = sumSalary2 / arrayOnlyIT.length;
console.log(`Average Salary of employess of IT department : ${avgSalary1}`);



