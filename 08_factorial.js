

function factorialOfNum(num) {
    if (num == null || num == undefined || num == NaN || num < 0) {
        console.log(`Invalid input : ${num} `);
        console.log(`..........................`);
        
        
    } else {
        if (num == 0) {
            console.log(`Factorial of Zero is 1`);
            console.log(`..........................`);
            
            
        } else {
            var result = 1;
            for (let index = num; index >=1; index--) {
              
                result = result * index;
               
            }
            console.log(`Factorial of ${num} : ${result}`) 
            console.log(`..........................`);

        }
    }
}
  
factorialOfNum(5);
factorialOfNum(3);
factorialOfNum(null);
factorialOfNum(8);
factorialOfNum(undefined);
factorialOfNum(9);
factorialOfNum(0);

