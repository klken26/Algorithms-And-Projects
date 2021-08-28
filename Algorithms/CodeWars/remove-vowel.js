
function disemvowel(str) {
 let strArr = str.split("");
 let regex = /[aeiou]/gi
 let finArr = strArr.filter(a => {return !(regex.test(a))})
 //yeah, i need to do it twice. i think the editor in the page has an error LOL
 return finArr.join("");
}


console.log(disemvowel("This website is for losers LOL!"))