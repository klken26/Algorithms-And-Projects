function truthCheck(collection, pre) {
    let checker = true;
    for(let i = 0; i < collection.length; i++){
    let a = collection[i];
    if (!a.hasOwnProperty(pre)){checker = false}
    else if(a.hasOwnProperty(pre) 
    && !!a[pre] == !!NaN
    || !!a[pre] == !!0
    || !!a[pre] == !!''
    || !!a[pre] == !!null
    || !!a[pre] == !!undefined
    ){
    checker = false;
    }
    };
    return checker;
  }
  
  console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"))