function myReplace(str, before, after) {
    let beforeArr = before.split("");
    let afterArr = after.split("");
    let capReg = /[A-Z]/g;
    //check if before string has captial letter, and capitalise the after string
    if(capReg.test(before.charAt(0)) && !capReg.test(after.charAt(0))){
    let shiftArr = [];
    shiftArr = afterArr.shift();
    let a = shiftArr[0]; 
    afterArr.unshift(a.toUpperCase());
    shiftArr = [];
    } 
    //check if after string has captial and de-captialise the after string 
    else if(!capReg.test(before.charAt(0)) && capReg.test(after.charAt(0))){
    let shiftArr = [];
    shiftArr = afterArr.shift();
    let a = shiftArr[0]; 
    afterArr.unshift(a.toLowerCase());
    shiftArr = [];
    }
    //regex process commences 
    let changer = new RegExp(beforeArr.join(""), "g")
    
    return str.replace(changer, afterArr.join(""))
  }
  
  console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"));
  