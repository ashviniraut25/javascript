var checkLeapYear = function  (leapYear) {
    if (leapYear == undefined || isNaN(leapYear) || leapYear == null ) {
        console.log(`Invalid Input : ${leapYear}`);
        console.log(`.............................`);

        
    } else {
            if (leapYear%4 ==0) {
                console.log(`${leapYear} is leap year`);
                console.log(`.............................`);

                
            } else {
                console.log(`${leapYear} is not leap year`);
                console.log(`.............................`);
            }
}
}
checkLeapYear(2020);
checkLeapYear(1999);
checkLeapYear(1600);
checkLeapYear(2022);
checkLeapYear(1945);
checkLeapYear(null);
checkLeapYear("Twenty Twenty");
checkLeapYear(undefined);
checkLeapYear(NaN);
checkLeapYear(1750);
