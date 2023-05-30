let professor = {
    name: "Ganesh",
    age: 38,
    city: "Pune",
    subject:"Soft Computing",

    

degrees: {
engineering: "CSC",
mTech:'CSC',
phd: "Adv Computing",

},  
certificates: ["Hacker Rank Participation", "Certificate in IFE course", "Cerificate in Adv Programming"], 

value: function () {
    console.log(`3)Professor total degrees are :Enginerring :"${this.degrees.engineering}", Phd:"${this.degrees.phd}"`);
    
},
};

console.log(`1)Professor Objects are :`);
console.log(professor);
console.log(`===============================================================================`);

console.log(`2)Certificates : "${professor.certificates}"`);
console.log(`================================================================================`);

professor.value();
console.log(`===============================================================================`);

professor.totalExperience = "14 years";
console.log(`4)Adding New Property Total Experiance of Professor : "${professor.totalExperience}"`);
console.log(`===============================================================================`);

professor.city = "Mumbai";
console.log(`5)Modify Existing property City Pune : "${professor.city}"`);
console.log(professor);
console.log(`================================================================================`);

professor.certificates.push("Oracle Certified");

console.log(`6)Last Element of array certificates : "${professor.certificates[professor.certificates.length-1]}"`)