function steamrollArray(arr) {

  //recursive function (not recommended as ineffective!)
  function recursiveArr(arr){
    if(!Array.isArray(arr)){return arr}
    return recursiveArr(arr[0]);
  }

  /*
A BETTER WAY TO PERFORM A DYNAMIC LOOP TO ACCESS VARIABLE:

A WHILE LOOP vs RECURSION

circular assignment: 

2 criterias: 

1) a loop with a valid condition
2) reassignment of variable to itself, in a way that involves traversing 


  let a = [[[[[4]]]]]
let b = [];
let c = a[0];
while (Array.isArray(c)){
    c = c[0];
}

console.log(c)
  */


  //array cycling function
  function cycler(multiArr){
  //check if it is still an array;
  multiArr.forEach(a => {
  finArr.push(recursiveArr(a));
  })
  }
 //push all instances of values into the finArr
 let finArr = [];
 arr.forEach(a => {
 if(!(Array.isArray(a))){finArr.push(a);}
 else if(Array.isArray(a)){ 
 cycler(a);
 }});
 return finArr;
 }


console.log(steamrollArray([[1, [[{}]]], [[[[[[[3]]]]]], [[4]]], [[[[[[[[[[[[[3454]]]]]]]]]]]]]]));

