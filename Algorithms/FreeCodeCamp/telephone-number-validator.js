function telephoneCheck(str) {
    let match = undefined;
    //contains all the regex keys to validate the phone number
    //i had to double the strokes because somehow, the program escapes the backslash.

    //some convoluted regex shit below
    let regexArr = ["\\d{3}( |\\-)\\d{3}( |\\-)\\d{4}", 
    "\\(\\d{3}\\) {0,1}\\d{3}\\-\\d{4}",
    "\\d{10}",
    "1 ?((\\(\\d{3}\\))?|\\d{3})(| |-)\\d{3}(| |-)\\d{4}"
    ];
   //boolean checker
   let check = regexArr.some(a=> {
       let regex = new RegExp(a)
       if(regex.test(str)){
           match = str.match(regex)
   //even though regex might match with a part of the str expression, but if the matched string is not equal to str, return false 
           if(match[0] !== str){
               return false;
           }
        else {return true}
       }
   });
   return check;
  }

console.log(telephoneCheck("1 (555) 555-5555"));