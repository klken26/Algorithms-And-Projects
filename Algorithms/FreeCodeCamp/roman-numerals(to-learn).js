function convertToRoman(num) {
    let decimalVal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let romanNum = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    var roman= "";
  
    for (var i = 0; i < decimalVal.length; i++) {
      while (decimalVal[i] <= num) {
        roman += romanNum[i];
        num -= decimalVal[i];
      }
    }
  
    return roman;
  };
  

  convertToRoman(36);