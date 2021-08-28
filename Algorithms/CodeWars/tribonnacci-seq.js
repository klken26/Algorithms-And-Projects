function tribonacci(signature,n){
    let finArr = JSON.parse(JSON.stringify(signature));
    if (n == 0){return []}

    else if(n < signature.length){
    return finArr.slice(0,n)}
    
    finArr.reverse();
    while (finArr.length < n){
    let test = finArr.slice(0,3);
    console.log(test)
    finArr.unshift(test.reduce((a,b) => {return a+b}))
    }
    return finArr.reverse();
  }


//console.log(tribonacci([1,1,1],10))
//result [1, 1, 1, 3, 5, 9, 17, 31, 57, 105]
console.log(tribonacci([0,0,1],10))
//result [0,0,1,1,2,4,7,13,24,44]