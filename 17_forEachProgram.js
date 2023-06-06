let array =["ashvini", "raut"];
let result = 0;
array.forEach(element => {
    let length = element.length;
    result = result +  (length*length);
    
});
console.log(result);