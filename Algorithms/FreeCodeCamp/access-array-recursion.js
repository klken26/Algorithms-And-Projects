function recursiveArr(arr){
if(!Array.isArray(arr)){return arr}
return recursiveArr(arr[0]);
}

console.log(recursiveArr([4]))


