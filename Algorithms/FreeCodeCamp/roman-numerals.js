function convertToRoman(num) {
    let newNum = num;
    let romanNum = [];
    let tens;
    let hundreds;
    let thousands;
    //creating roman numeral and decimal numeral arrays to refer to
    let romanArr = ["I", "V", "X", "L", "C", "D", "M"];
    //let decArr = [1,5,10,50,100,500,1000];

    //base value: from 1 to 9
    let ones = parseInt((JSON.stringify(newNum)).charAt(JSON.stringify(newNum).length -1))
    if(ones > 0){
    if (ones < 4){for(let i = ones; i > 0; i--){romanNum.push(romanArr[0])}}
    else if (ones == 4){romanNum.push(romanArr[1]);romanNum.push(romanArr[0])}
    else if (ones == 5){romanNum.push(romanArr[1])}
    else if (ones > 5 && ones < 9){for(let i = ones; i > 5; i--){romanNum.push(romanArr[0])}romanNum.push(romanArr[1])}
    else if (ones == 9){romanNum.push(romanArr[2]);romanNum.push(romanArr[0])}
    }
    //from 10 to 99
    if(num > 9){
     tens = parseInt((JSON.stringify(newNum)).substring((JSON.stringify(newNum).length - 2), (JSON.stringify(newNum).length))) - ones;
     if (tens < 40){for(let i = tens; i > 0; i-= 10){romanNum.push(romanArr[2])}}
    else if (tens == 40){romanNum.push(romanArr[3]);romanNum.push(romanArr[2])}
    else if (tens == 50){romanNum.push(romanArr[3])}
    else if (tens > 50 && tens < 90){for(let i = tens; i > 50; i-= 10){romanNum.push(romanArr[2])}romanNum.push(romanArr[3])}
    else if (tens == 90){romanNum.push(romanArr[4]);romanNum.push(romanArr[2])}
    }
    //from 100 to 999
    if(num > 99){
     hundreds = parseInt((JSON.stringify(newNum)).substring((JSON.stringify(newNum).length - 3), (JSON.stringify(newNum).length))) - tens - ones;
     if (hundreds < 400){for(let i = hundreds; i > 0; i-= 100){romanNum.push(romanArr[4])}}
     else if (hundreds == 400){romanNum.push(romanArr[5]);romanNum.push(romanArr[4])}
     else if (hundreds == 500){romanNum.push(romanArr[5])}
     else if (hundreds > 500 && hundreds < 900){for(let i = hundreds; i > 500; i-= 100){romanNum.push(romanArr[4])}romanNum.push(romanArr[5])}
     else if (hundreds == 900){romanNum.push(romanArr[6]);romanNum.push(romanArr[4])}
    }
    //from 1000 onwards (realistically I am not coding for big numbers)
    if (num > 999){
     thousands = parseInt((JSON.stringify(newNum)).substring((JSON.stringify(newNum).length - 4), (JSON.stringify(newNum).length)))- hundreds - tens - ones;
     for(i = thousands; i > 0; i-=1000){romanNum.push(romanArr[6])}
    }

    return romanNum.reverse().join("");
   }
   
   console.log(convertToRoman(3999))