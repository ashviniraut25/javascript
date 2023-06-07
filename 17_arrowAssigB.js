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
const empViny = new Employee(88, "Viny", "IT", 75000, "TCS");
const empMahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmployee = [empAnil, empRadha, empRishi, empSonali, empMonika, empViny, empMahi];

console.log(`================1)Find Employees working in TCS and log only names and company name===================== `);


for (const employee of arrayEmployee) {
    if (employee.empCompany == "TCS") {
        console.log(`Employee name : "${employee.empName}"   Company name : "${employee.empCompany} `);
    }
}
console.log(``);
console.log(`=============2)Find Finance department Employees log only department and employee names================== `);

for (const employee of arrayEmployee) {
    if (employee.empDept == "Finance") {
        console.log(`Employee department : "${employee.empDept}"   Employee name : "${employee.empName} `);
    }
}
console.log(``);
console.log(`===========3)Find the Employees whose name start with "R" and complete employee details================== `);

for (const employee of arrayEmployee) {
    if (employee.empName.startsWith("R")) {
        console.log(employee);
        console.log(`-------------------------------------------------------------------------------------------------`);
    }
}
console.log(``);
console.log(`==4)Find the Employees working whose salary greater than 75000, and log emp names and company and salary==`);

for (const employee of arrayEmployee) {
    if (employee.empSalary > 75000) {
        console.log(`Employee name : "${employee.empName}",  Company name : "${employee.empCompany}", Employee salary : "${employee.empSalary}"  `);
    }
}
console.log(``);
console.log(`============5)Find the Employees whose salary>= 50000 && department IT, log complete details============= `);

for (const employee of arrayEmployee) {
if (employee.empSalary >= 50000 && employee.empDept=="IT") {
    console.log(employee);
    
 }
   
}

console.log(``);
console.log(`======================6)Find Employees working in "Infy" and log complete details======================== `);
for (const employee of arrayEmployee) {
    if (employee.empCompany == "Infy") {
        console.log(employee);
        console.log(`-------------------------------------------------------------------------------------------------`);
    }
}

let sumSalary = 0;

arrayEmployee.forEach(employee => {
    sumSalary = sumSalary + employee.empSalary;


});
let result = sumSalary/arrayEmployee.length;
console.log(result);