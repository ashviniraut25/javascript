function isPaldrome(str) {
    let i = 0;
    let k ;
    let j = str.length-1;
    for (let i = 0; i < j; i++) {
      const x = str.charAt(i);
      const y = str.charAt(j-i);
      if (x!=y) {
        k = 0;
      }
      else{
        k = 1;
      }
     }
    if (k==1) {
      console.log(`Given String : "${str}" is a Palindrome`);
      console.log(`********************************************`);
      
    } else {
      console.log(`Given String : "${str}" is not a Palindrome`);
      console.log(`********************************************`);
      
    }
  
  }
isPaldrome("madam");
isPaldrome("141");
isPaldrome("Sunday");
isPaldrome("mom");
isPaldrome("listen");
isPaldrome("dad");
