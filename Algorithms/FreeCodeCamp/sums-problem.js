function sumsProblem(arr, target){
    //deep copy to ensure original array is not mutated
let tempArr = JSON.parse(JSON.stringify(arr));
    //now tempArr is [1,2,3,6,17,23,82,234]
    tempArr =  tempArr.sort((a,b)=> {return a-b;})
    //sum accumulator
    let tempSum;
    //It is called rootnum as this entire algorithm was based off a 
    //model of a limited binary search tree. (because it only has to have a single function/class)
    let rootNum;
    //index holder (which will be used later to keep indexes of accepted sum values)
    let indexArr = [];

    //special case: if the target number exists in the original arr, then return the index in original arr
    if(tempArr.includes(target)){
        let a = [];
        a.push(tempArr.indexOf(target) + 1);
        return a;
    } else {

    //helps to find index of item that is the largest number before the target number
    //this is so that you can add the numbers before it, like a linked list/unbalanced binary search tree
    //(more will be explained later)

        for(let i = 0; i < tempArr.length; i++){
        if (tempArr[i+1] > target && tempArr[i] < target){
          tempSum = tempArr[i];
          rootNum = tempArr[i];
          indexArr.push(arr.indexOf(rootNum));
    //special case: if rootnum is the last number in array
         } else if(i == tempArr.length - 1 && tempArr[i] < target){
          tempSum = tempArr[i];
          rootNum = tempArr[i];
          indexArr.push(arr.indexOf(rootNum));
         }
       }


    //now tempArr is [1,2,3,6,17,23,82,234]
    //these operations are done while the sum accumulator is smaller than the target 
    while (tempSum < target){
    //if the sum accumulator + the number before the rootnum in the tempArr is 
    //larger than the target, delete that number that is infront of the rootnum from the array
    if ((tempSum + tempArr[tempArr.indexOf(rootNum) - 1]) > target){
     tempArr.splice(tempArr.indexOf(rootNum) - 1, 1);
    } else{
    //else if the sum is smaller than the target, proceed to add that number into the accumulator
    //and delete that added number from the array so that it does not add again. 
    indexArr.push(arr.indexOf(tempArr[tempArr.indexOf(rootNum) - 1]))
    tempSum += tempArr[tempArr.indexOf(rootNum) - 1];
    tempArr.splice(tempArr.indexOf(rootNum) - 1, 1);
      }
     }
    }
    //returns the sorted index array
    return indexArr.sort((a,b) => {return a-b;})
}

console.log(sumsProblem([1,2,6,3,17,82,23,234], 23)) //--> [3,6]

//[1,2,6,3,17,82,23,234], 40 --> [4,6]
//[1,2,6,3,17,82,23,234], 23 --> [6]