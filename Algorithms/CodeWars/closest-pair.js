function closestPair(arr){
let finArr = [];
//an array to push the difference values in
let diffArr = [];
let testArr =JSON.parse(JSON.stringify(arr))
.sort((a,b) => {return b - a});
//creating a for loop here to calculate difference
//over here I am setting (i < testArr.length - 1) as I want the loop to end at the 2nd last integer
for(let i = 0; i < testArr.length - 1; i++){
let diff = testArr[i] - testArr[i+1];
diffArr.push(diff);
 }
let diffArr2 = JSON.parse(JSON.stringify(diffArr))
.sort((a,b) => {return a - b});
let index = diffArr.indexOf(diffArr2[0]);
 finArr.push(testArr[index]);
 finArr.push(testArr[index + 1]);
 return finArr
//.push(diffArr.push(index+1))

}

let a = [1,1000,900,948,2512,5,7,13];
console.log(closestPair(a));