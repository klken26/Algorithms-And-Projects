function whatIsInAName(collection, source) {
    // "What's in a name? that which we call a rose
    // By any other name would smell as sweet.”
    // -- by William Shakespeare, Romeo and Juliet
    var srcKeys = Object.keys(source);                                 //collects the properties of the source object (the tester)
    console.log(srcKeys);
    return collection.filter(function(obj) {                           //1) uses the objects (from collection) in each array element through a filter process, iterates them.
      return srcKeys.every(function(key) {                             //2) uses srcKeys array, which contains the properties of the source and iterates through each of them, putting them through a callback function. 
        return obj.hasOwnProperty(key) && obj[key] === source[key];    //3) checks if the object from collection array has the property, as well as if the value of the collection object property is the same as the property content of the source object.
      });
    });                                                                
  }
  
  // test here
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" }
    ],
    { last: "Capulet" }
  );