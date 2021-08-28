function toCamelCase(str){
let strArr = str.split("");
let spaceReg = /[_\W]/g;
for(let i = 0; i < strArr.length; i++){
if(i !=0 && spaceReg.test(strArr[i-1])){
let temp = strArr[i];
strArr[i] = temp.toUpperCase();
  }
 }
 return strArr.join('').replace(spaceReg, "");
}

console.log(toCamelCase(("the_stealth_warrior")));
//output: theStealthWarrior