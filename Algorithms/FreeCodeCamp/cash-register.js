function checkCashRegister(price, cash, cid) {
    let change = cash - price;
    let pennyCount = 0;
    let nickelCount= 0;
    let dimeCount = 0;
    let quarterCount = 0;
    let dollarCount = 0;
    let fivedollarCount = 0;
    let tendollarCount = 0;
    let twentydollarCount = 0;
    let hundreddollarCount = 0;
  
    //object to return
    let finObj = {status: "INSUFFICIENT_FUNDS", change: []};
    //creates a deep copy! new concept
    let newCid = JSON.parse(JSON.stringify(cid))
    //redundant variable. just ignore it
    let newCid2 = newCid.reverse();

    let count = [hundreddollarCount,twentydollarCount,tendollarCount,fivedollarCount,dollarCount,quarterCount,dimeCount,nickelCount,pennyCount];
    let currencyArr = [[100],[20],[10],[5],[1],[0.25],[0.1],[0.05],[0.01]];
    let wordArr = [["ONE HUNDRED"], ["TWENTY"], ["TEN"], ["FIVE"], ["ONE"], ["QUARTER"], ["DIME"], ["NICKEL"], ["PENNY"]]
    wordArr.reverse();
    //calculate the number of change units for each currency division and push it into the currencyArr
    for (let i = 0; i < newCid2.length; i++){
     let count = 0;
     if (currencyArr[i][0] > 0.1){
     while(newCid2[i][1] >= currencyArr[i][0]){
       newCid2[i][1]-=currencyArr[i][0];
       count++;
      }
      currencyArr[i].push(count);
    }
    //I had to add this extra line to ensure that the amount of money units is accurate. when it goes below 0.1, the program stops
    //(con't)before the smallest decimal. so for smaller decimals, the condition is changed to 0.
    else if (currencyArr[i][0] == 0.05){
      while(newCid2[i][1] > 0){
      newCid2[i][1]-=currencyArr[i][0];
      count++;
      }
      currencyArr[i].push(count);
    }
    else {while(newCid2[i][1] > 0){newCid2[i][1]-=currencyArr[i][0];count++;}currencyArr[i].push(count);}
   }

    //to split the change
    for (let i = 0; i < currencyArr.length; i++){
      let counter = currencyArr[i][1];
      if (currencyArr[i][0] > 0.01){
      while (currencyArr[i][0] <= change && counter > 0 /*making use of the counter*/){
        change-=currencyArr[i][0];
        count[i]+=currencyArr[i][0];
        counter-=1;
      }
    //likewise, I had to change currencyArr[i][0] to 0 so that I can account for the lost last 0.01 dollars.
     }else if(currencyArr[i][0] == 0.01){
       while (0 < change && counter > 0 /*making use of the counter*/){
         change-=currencyArr[i][0];
         count[i]+=currencyArr[i][0];
         counter-=1;
        }
    //makes the number into an int, trims off decimal and divides it back into a decimal
    count[i]*=10000;
    //bitwise operator. frankly i don't know much about it 
    count[i] = ~~count[i];
    count[i]/=10000
    }
     else{
       while (0 < change && counter > 0 /*making use of the counter*/){
         change-=currencyArr[i][0];
         count[i]+=currencyArr[i][0];
         counter-=1;
        }
      }
    }
     
    //I need 2 testers to check if:
    // 1) total value of change calculated is equal to the change needed to return
    // 2) the change units given is exactly the same as in the cash register
  
    //calculation of change from money units calculated
    let c = (count.reduce((a,b) => {return a+b}))*1000;
    let calChange = (~~c)/1000
    //calculating original change (because the loops above have mutated it)
    change = cash - price;
    if(calChange !== change){return finObj;}
    else{
      let reverseCount = JSON.parse(JSON.stringify(count))
      reverseCount.reverse();
    //boolean checker: uses a custom .every() function
      let checker = false;
      for (let i = 0; i < cid.length; i++){
       if (cid[i][1] == reverseCount[i]){
         checker = true;
        } else {checker = false; break;}
      }
     if (checker == true){
      finObj.status = "CLOSED";
      finObj.change = JSON.parse(JSON.stringify(cid));
     } else {
      finObj.status = "OPEN";
      for(let i = 0; i < wordArr.length; i++){
      wordArr[i].push(reverseCount[i])
      }
      let finArr = wordArr.filter(a => {return a[1] !== 0})
      finObj.change = finArr.reverse();
     }
    }
      return finObj;
    }
    let a = checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
    console.log(a)