function sumFibs(num) {
  //odd fibonacci number generator
  function oddFibs(n){
    let a = ((Math.pow(((1 + Math.pow(5, 0.5))/2),n) - Math.pow(((1-Math.pow(5,0.5))/2),n))/Math.pow(5, 0.5))
    return (Math.round(a) %2 !== 0 ? Math.round(a) : 0);
       }
       
 let sum = 0;
 let fibArr = [0];
 for (let i = 0; oddFibs(i) <= num; i++){
    fibArr.push(oddFibs(i));
    sum = fibArr.reduce((total, val) => {return total + val});
}
   return sum;
  }
  
  console.log(sumFibs(75025));
   