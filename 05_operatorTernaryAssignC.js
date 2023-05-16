console.log(`01.................Male Marriage Eligibility................01`);


function maleMarriageEligibility(gender, age, boyName) {
    var result = gender=="Male" && age>=21 ? `${boyName} you are eligible for Marriage`: `${boyName} you are not eligible for Marriage`;
    console.log(result);
    console.log(`...........................................`);
}
maleMarriageEligibility("Male", 25, "Billgates");
maleMarriageEligibility("Male", 17, "Stew Jobs");



console.log(`02..................Female Marriage Eligibility................02`);
function femaleMarriageEligibility(gender, age, girlName) {
    var result = gender=="Female" && age>=18 ? `${girlName} you are eligible for Marriage`: `${girlName} you are not eligible for Marriage`;
    console.log(result);
    console.log(`............................................`);
}
femaleMarriageEligibility("Female", 16, "Jenifer");
femaleMarriageEligibility("Female", 27, "MalindaGates");
