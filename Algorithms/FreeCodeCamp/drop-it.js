function dropElements(arr, func) {
    //a new array to prevent Array mutation
    let tempArr = Array.from(arr);
    //to keep the indexes from the .some() statement later
    let indexArr = [];
    //the array to push the data into
    let finArr = [];
    arr.some(a => {
        let check = func(a);
        if (check){indexArr.push(arr.indexOf(a))}
        return func(a)})
    //a for loop to cycle through tempArr and push all values into finArr
    for(let i = indexArr[0]; i < arr.length; i++){finArr.push(tempArr[i]);}
    return finArr;
  }
  
  console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}));