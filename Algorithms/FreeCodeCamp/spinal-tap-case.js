function spinalCase(str) {
   //replaces all _ or space with a hypen
   let finalStr = str.replace(/ |_/g, "-");
    let strArr = finalStr.split("");
    let capReg = /[A-Z]/g ;

    for (let i = 0; i < strArr.length; i++){
   //checks if character is capitalised
     if(i !== 0 && capReg.test(strArr[i]))
     if(strArr[i-1]!== "-"){
         strArr.splice(i, 0, "-")
      }
     }
     return strArr.join("").toLowerCase();
    }

  console.log(spinalCase('ThisIsSpinalTap'));
  