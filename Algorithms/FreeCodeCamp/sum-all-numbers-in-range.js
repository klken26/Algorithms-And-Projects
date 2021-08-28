function sumAll(arr) {
    let tempArr = [];
    let firstHolder = arr[0];
    let secHolder = arr[1];
    if (firstHolder < secHolder){
        for (let i = firstHolder; i <= secHolder; i++){
            tempArr.push(i);
        }
    } else if (firstHolder > secHolder){
        for (let i = secHolder; i <= firstHolder; i++){
            tempArr.push(i);
        }
    }
    let holder = 0;
    for (let i = 0; i < tempArr.length; i++){
        holder+=tempArr[i];
    }
     return holder;
  }
  
 console.log(sumAll([4, 1]));
  