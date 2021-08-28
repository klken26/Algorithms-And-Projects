function uniteUnique() {
    let finArr = [];
    //iterate through every argument (which is an array)
    for (let i = 0; i < arguments.length; i++){
    //iterates through every item in array, check if the array has said element and pushes if it doesn't
    arguments[i].forEach(item =>{
    let checker = finArr.includes(item);
    if (!checker){finArr.push(item);}})
   }      
  return finArr;
 }
    
  

  
  console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4]))