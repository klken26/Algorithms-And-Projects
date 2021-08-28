function noGuard(a,b){
let counter = 0; 
let bool = false;
let tempEvenArr = [];
for(let i = a; i <= b; i++){
if(i%2 == 0){
tempEvenArr.push(i);
 }
 for(let j = 1; j <= b; j+=3){
if(tempEvenArr.includes(j)){
tempEvenArr.splice(tempEvenArr.indexOf(j), 1);
}
 }
}
console.log(tempEvenArr);
return tempEvenArr.length; 
}


console.log(noGuard(1,4))