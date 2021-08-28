function fearNotLetter(str) {
    let missingChar = undefined;
    //find the ASCII numbers of first and last characters
    let tempArr = [];
    let firstCharNum = str.charCodeAt(0);
    let lastCharNum = str.charCodeAt(str.length-1)
    //create a new string using the first and last character code
    for (let i = firstCharNum; i < lastCharNum + 1; i++){
        tempArr.push(String.fromCharCode(i));
    }
    //this new string will be tested, and the provided string (in argument) will be the dynamic regex key
    let tempStr = tempArr.join("");
    let rangeRegex = new RegExp("[^" + str + "]");
    //returns missing character
    missingChar = tempStr.match(rangeRegex);
    //if match is a null, change the value to undefined
    if (missingChar == null){missingChar = undefined;}
    else {missingChar = missingChar[0]}
    return missingChar;
  }
  
  console.log(fearNotLetter("bcdf"));
  