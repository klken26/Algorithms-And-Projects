function sumPrimes(num) {
    let primeArr=[2]
    for(let i = 3; i <= num; i++){
        let check = null;
        check = primeArr.every(a => {return(i % a != 0)})
        if (check == true){primeArr.push(i)};}
        
    return primeArr.reduce((a,b) => {return a+b});
  }
  
console.log(sumPrimes(977));
  