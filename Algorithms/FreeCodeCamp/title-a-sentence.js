
function titleCase(str) {
  let a = str.toLowerCase().split(" ");
  let b = [];
  let c = [];
  let d = [];
   for(let i = 0; i < a.length; i++){
b.push(a[i].charAt(0).toUpperCase());
c[i] = a[i].split("");  
c[i][0] = b[i];
d.push(c[i].join(""));
}

   return d.join(" ")
  }
  



console.log(titleCase("I'm a little tea pot"));
  