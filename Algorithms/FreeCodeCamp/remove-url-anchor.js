function removeUrlAnchor(url){
let regex = /[^#]*/g
let a = url.match(regex);
return a[0];
}

console.log(removeUrlAnchor('www.codewars.com#about'))