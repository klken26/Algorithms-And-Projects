function addTogether() {
 let finalVal = 0;
 //for uncurried function use
 if(arguments.length > 1){
  for(let i = 0; i < arguments.length; i++){
  if(typeof arguments[i] != "number"){return undefined};
  {finalVal += arguments[i]}};
  return finalVal;
  }
 //for curried function use
 if(arguments.length == 1){
  if(typeof arguments[0] != "number"){return undefined};
  finalVal = arguments[0];
   return function(y){
   if(typeof y !== "number"){return undefined};
   return finalVal+=y;
    };
   };
  };
  
  console.log(addTogether(2)([3]));
  