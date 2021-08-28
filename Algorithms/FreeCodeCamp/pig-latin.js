function translatePigLatin(str) {
    let strArr = str.split("");
    let vowelReg = /[aeiou]/gi
    if(vowelReg.test(strArr[0])){ strArr.push("way") }              //if first character is a vowel, put "way" at the back
    if(vowelReg.test(str) && !vowelReg.test(str.charAt(0))){        //for characters that have a vowel in them, but not at the start.
    while(!vowelReg.test(strArr[0])){
    let shiftArr = [];                                              //empty array to store first character 
    shiftArr = strArr.shift();
    strArr.push(shiftArr);
    if (vowelReg.test(strArr[0]) && !vowelReg.test(str.charAt(0)))  //to test if the work has been done, to ensure that all consonants have been pushed to the back and that this particular string is not a string that orignially begins with a vowel.
    strArr.push("ay");
    } 
   }
   if (!vowelReg.test(str)){ strArr.push("ay") }
    return strArr.join("");
 }
 

  
  console.log(translatePigLatin("rhythm"));