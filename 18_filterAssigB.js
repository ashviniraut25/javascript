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

const arrayEmployees = [empAnil, empRadha, empRishi, empSonali, empMonika, empViny, empMahi];

console.log(`=============1)Employees from "TCS"====================`);
const arrayTcsEmployees = arrayEmployees.filter((employee) => {
    return employee.empCompany == "TCS";
});

const arrayTcsEmployeeNames = arrayTcsEmployees.map((employee) => {
    console.log(employee.empCompany, employee.empName);

});
console.log(``);

console.log(`=======2)Average salary from company "Wipro"===========`);
const wiproEmployess = arrayEmployees.filter((employee) => {
    return employee.empCompany == "Wipro";
});

let salary = 0;
wiproEmployess.forEach((employee1) => {
    salary = salary + employee1.empSalary;
});
let avgSalary = salary / wiproEmployess.length;
console.log(`Average salary of wipro employee : ${avgSalary}`);
console.log(``);

console.log(`====3)Average salary from company "Wipro" & "Infy"=====`);
const allEmployess = arrayEmployees.filter((employee) => {
    return employee.empCompany == "Wipro" ||  employee.empCompany == "Infy";
});


let salary1 = 0;
allEmployess.forEach((employee1) => {
    salary1 = salary1 + employee1.empSalary;
});
let avgSalary1 = salary1 / allEmployess.length;
console.log(`Average salary of Wipro & Infy employee : ${avgSalary1}`);
console.log(``);

