function sumTwoSmallestNumbers(numbers) {  
    numbers.sort((a,b) => {return a - b});
    console.log(numbers)
    return (numbers.slice(0,2)).reduce((a,b) => {return a+b})
  }


console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]))