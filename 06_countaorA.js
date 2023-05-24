function countCharA(string) {
    console.log(`Given string is :"${string}"`);
    var count = 0;
    for (let index = 0; index < string.length; index++) {
        const char = string.charAt(index);
        if (char == 'a' || char == 'A') {
            count++;

            
        }
        
    }
console.log(`Total number of 'a' or 'A' in given string:==> "${count}"`);
console.log(`.........................................................`);

    
        
    }

    



countCharA("I AM Learning JavaScript, The Language of internet");
countCharA("My Favourite movie is LAggAn");