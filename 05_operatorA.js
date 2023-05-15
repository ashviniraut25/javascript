console.log(`01......................Square of given string................................01`);

function squareOfWordLength(givenstring) {
    
    var lengthstr; 
    lengthstr = givenstring.length;
    console.log(`Given string length  "${givenstring}"   : ${lengthstr}`);
    console.log(`Square of given string "${givenstring}" : ${lengthstr*lengthstr}`);
    console.log(`................................................................................`);
}
 squareOfWordLength('javaScript');
 squareOfWordLength("Google Chrome");
 squareOfWordLength("Developer Smart");
 console.log(`02...........................Divide & multiply................................02`);
 console.log(`.................................................................................`);
 function string(stringBase){
  var length ;
  var words ;
  var word;
  length = stringBase.length;
  words = stringBase.split(' ');
  word = words.length;
  console.log(`Given string is "${stringBase}"`);
  console.log(`Given string length : ${length}`);
  console.log(`Words in given string :${word}`);
  console.log(`String length divide by total number of words avaliable in string : ${length/word}`);
  console.log(`String length multiple by total number of words avaliable in string : ${length*word}`);
 }
 string("I am Angular Developer");