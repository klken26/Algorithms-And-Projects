function pairElement(str) {
    let encapArr = [];
    //to push the individual letters into so i can push it into the final bigger array.
    let encapArr2 = []; 
    //pushes all char into one array
    for(let i = 0; i < str.length; i++){
    encapArr2.push(str.charAt(i));
}   // pushes all char into each individual array and pushes them into final array
    encapArr2.forEach(item => {
        if (item == "G"){
            let a = [];
            a.push(item);
            a.push("C")
            encapArr.push(a);
        } else if(item == "C"){
            let a = [];
            a.push(item);
            a.push("G")
            encapArr.push(a);
        } else if(item == "T"){
            let a = [];
            a.push(item);
            a.push("A")
            encapArr.push(a);
        } else if(item == "A"){
            let a = [];
            a.push(item);
            a.push("T")
            encapArr.push(a);
        }
    });
return encapArr;
}
  
  console.log(pairElement("TTGAG"));
  