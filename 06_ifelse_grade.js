function votingAge(age) {
    if (age<=0 || (age == undefined) || (age == "null") || (age>120)) {
        console.log(`Invalid Data: age: ${age}`);
        console.log(`...................................................`);
    } else {
        if (age>=18) {
            console.log(`Congratulations! your eligible for voting: age :${age}`);
            console.log(`...................................................`);

            
        } else {
            console.log(`Sorry your not eligible for voting: age :${age}`);    
            console.log(`...................................................`);
        }
        
        
    }
    
}
votingAge(21);
votingAge(15);
votingAge(0);
votingAge(null);
votingAge(undefined);
votingAge(130);
votingAge(-10);
votingAge(18);
votingAge(120);


