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

const arrayEmployee = [empAnil, empRadha, empRishi, empSonali, empMonika, empViny, empMahi];

console.log(`============================1)TCS employee details=======================================`);
arrayEmployee.forEach(employee => {
    if (employee.empCompany == "TCS") {
        console.log(`Company name : "${employee.empCompany}" Employee name : "${employee.empName}" `);
    }
});

console.log(``);
console.log(`==============================2)Employee salary >= 50000 ==================================`);
arrayEmployee.forEach(employee => {
    if (employee.empSalary >= 50000) {
        console.log(employee);
    }
});

console.log(``);
console.log(`==================================3)Sum of all employee salary=============================`);
let sum = 0;
arrayEmployee.forEach(employee => {
    sum = sum + employee.empSalary;
});
console.log(`Sum of all employee Salary : "${sum}"`);

console.log(``);
console.log(`===================================4)Avreage salary========================================`);
let sum1 = 0;
arrayEmployee.forEach(employee => {
    sum1 = sum1 + employee.empSalary;
});
let avarage = sum1 / arrayEmployee.length;
console.log(`Average of salary : "${avarage}"`);

console.log(``);
console.log(`==============5)Find 'IT' OR 'HR' department employees whose salary >= 75000 ===============`);
arrayEmployee.forEach(employee => {
    if ((employee.empDept == "IT" || employee.empDept == "HR") && employee.empSalary >= 75000) {
        console.log(employee);
    }
})