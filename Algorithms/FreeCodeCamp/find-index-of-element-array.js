function sortIndex(arr,x){
let tempArr = JSON.parse(JSON.stringify(arr));
let indexArr = [];
let finArr = [];
for (let i = 0; i < tempArr.length; i++){ //whole loop process is O(n)
if (tempArr[i] == x){
    indexArr.push(i);
}
 }
if(indexArr.length == 0){
    return [-1,-1];
 } else if (indexArr.length == 1){
let x = indexArr[0];
finArr = [x,x]; //O(1)
return finArr;
 } else {
    finArr.push(indexArr.shift()); //shift here is O(n)
    finArr.push(indexArr.pop());   //pop here is O(1)
    return finArr;
 }
}

console.log(sortIndex([2,3,6,7,7,8,8,8,12],8))