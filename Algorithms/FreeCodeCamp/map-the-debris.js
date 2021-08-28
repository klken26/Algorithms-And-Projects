function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    arr.forEach(a => {
    let period = Math.round(2*Math.PI*(Math.pow((Math.pow((a.avgAlt+earthRadius),3)/GM) ,0.5)))
    a.orbitalPeriod = period;
    delete a.avgAlt;
    });
    return arr;
  }
  
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
  