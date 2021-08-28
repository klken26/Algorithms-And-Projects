function smallestCommons(arr) {
    function doTheJob(num1, num2){
     // first prime number is 1, but multiplying 1 is not going to make a difference. IF i am adding my prime numbers, then it will make a difference.
     let primeArr = [2];
     //generate prime numbers for the range
     for(let i = 3; i <= num2; i++)
     {let check = null; 
     check = primeArr.every(a => {return(i % a != 0)})
     if(check == true)
     {primeArr.push(i)}};

     //60 is 1*2^2*3*5, 2520 is 1*2^3*3^2*5*7 - side note
    //LCM function, taking 2 array elements and finding LCM using primeArr
    function findLCM(arr1,arr2){
        //final array to be reduced and returned
         let calcArr = [];
        //create arrays to hold the prime numbers of the individual numbers
         let prime1 = [];
         let prime2 = [];
         primeArr.forEach(a => {for(arr1; arr1%a == 0; arr1 = arr1/a){prime1.push(a)}})
         primeArr.forEach(a => {for(arr2; arr2%a == 0; arr2 = arr2/a){prime2.push(a)}})
         //test which and how many instances of prime number in each array
         primeArr.forEach(a => {
         //creating index arrays to compile and compare the array lengths
         let index1 = [];
         let index2 = [];
        //using i as the index
         for(let i = 0; i < prime1.length; i++){if(prime1[i] == a){index1.push(i);}}
         for(let i = 0; i < prime2.length; i++){if(prime2[i] == a){index2.push(i);}}
         if(index1.length > index2.length){for(let i = 0; i < index1.length; i++){calcArr.push(a);}}
         else if(index2.length > index1.length){for(let i = 0; i < index2.length; i++){calcArr.push(a);}}
         })
         return calcArr.reduce((a,b) => {return a*b});
        }

        //holds the LCM calculated
         let LCMholder = null;
        //creates number array with full range
         for(let i = num2; i >= num1; i--){
             //if the largest number cannot divide the 2nd largest number, create LCM between them
            if(i == num2 && i%(i-1) != 0){LCMholder = findLCM(i, i-1);} 
            //if LCM cannot divide with the next largest number, form a new LCM with the indivisible number
            else if (LCMholder%(i-1) != 0 && i != num1){LCMholder = findLCM(LCMholder, i-1);}
        };
        return LCMholder;
        }       

        if(arr[0] < arr[1]){return doTheJob(arr[0], arr[1])}
        else if(arr[0] > arr[1]){return doTheJob(arr[1], arr[0])}
}
    
      
console.log(smallestCommons([1, 23]));

