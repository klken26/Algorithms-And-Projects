function wordPyramid(S,T,Q){
//creating a recursive function to allow dynamic subtraction (if needed)
function recursiveMinus(n){
    if(n<S.length){return n}
    else{return recursiveMinus(n-S.length)};
 }
//to check how many instances of the word being replicated in each line
 let regex = new RegExp(T,"g")

//creating a counter to save instances of code replication
//a nested for loop: outer loop for the line, inner for the character print
//i is the count of the current line
for(let i = 1; i <= Q; i++){
 let tempCharArr = [];
//u is the count of the character integer it is pushing
  for(let u = 0; u < i; u++){
   tempCharArr.push(S.charAt(recursiveMinus(u)))
  }
//checks the number of matches in that specific line
 let temp = tempCharArr.join("").match(regex);
 temp != null ? temp = temp.length : temp = 0; 
 tempCharArr.unshift(temp + " ");
 console.log(tempCharArr.join(""));
 }
return "";
}

console.log(wordPyramid("codechef","chefcode",1455))