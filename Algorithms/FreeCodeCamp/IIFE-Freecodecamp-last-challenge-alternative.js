/* let isCuteMixin = function(obj) {
    obj.isCute = function() {
      return true;
    };
  };
  let singMixin = function(obj) {
    obj.sing = function() {
      console.log("Singing to an awesome tune");
    };
  }; */
  


  let duck = {};

  let funModule = {
     isCuteMixin(obj) {
         obj.isCute = function(){return true};
     },
     
     singMixin(obj){
       obj.sing = function(){
console.log("Singing to an awesome tune");
       };
     }
  }

funModule.isCuteMixin(duck);
funModule.singMixin(duck);
console.log(duck);