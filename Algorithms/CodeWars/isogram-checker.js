function isIsogram(str){
    //split words into array first
    let strArr = str.split("");
    let checker;
    checker = strArr.some(a=> {
        let regex = new RegExp(a, "gi");
        let b = str.match(regex);
        return (b.length > 1)
    })
    return checker ? false:true
  }

  console.log(isIsogram("isIsogram"))