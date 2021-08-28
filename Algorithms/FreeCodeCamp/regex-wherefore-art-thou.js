function whatIsInAName(collection, source) {
  var arr = [];
  let tempReg = JSON.stringify(source).replace("{", "(?=.*").replace("}", ")").replace(",", ")(?=.*")
  let reg = new RegExp(tempReg, "g")
  console.log(reg);
  let temp = "";
  // Only change code below this line
for (let i = 0; i < collection.length; i++){
  let checker = false;
    let tempStr = JSON.stringify(collection[i])
    console.log(tempStr)
    checker = reg.test(tempStr);
    console.log(reg)
    console.log(checker)
    if (checker == true){
        arr.push(collection[i]);
    }
    
}
return arr;
 }
 
 console.log(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }))