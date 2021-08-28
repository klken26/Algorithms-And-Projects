function destroyer() {
    let arr = Array.from(arguments[0]);
    let finArr = [];
    for (let i = 1; i < arguments.length; i++){
arr = arr.filter(a => a !== arguments[i])
    }

    return arr;
  }
  
 console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
  