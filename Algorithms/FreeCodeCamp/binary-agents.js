function binaryAgent(str) {
    let binArr = str.split(" ");
    // array to hold all decimal numbers
    let decArr = [];
    let charArr = [];
    //creates decimal numbers for ASCII conversion
    binArr.forEach(a => {decArr.push(parseInt(a, 2))});
    //converts all decimal numbers into letters
    decArr.forEach(a => {charArr.push(String.fromCharCode(a))})
    return charArr.join("");
    
  }
  
  console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));