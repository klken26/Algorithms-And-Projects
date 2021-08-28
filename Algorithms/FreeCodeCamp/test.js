function checkCashRegister(price, cash, cid) {
    //creating new array to prevent array mutation
    let newCid = JSON.parse(JSON.stringify(cid))
    newCid.reverse();
    
   
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
    
    let count = [hundreddollarCount,twentydollarCount,tendollarCount,fivedollarCount,dollarCount,quarterCount,dimeCount,nickelCount,pennyCount];
    let currencyArr = [[100],[20],[10],[5],[1],[0.25],[0.1],[0.05],[0.01]];

        //calculate the number of change units for each currency division and push it into the currencyArr
        for (let i = 0; i < newCid.length; i++){
            let count = 0;
            if (currencyArr[i][0] > 0.1){
            while(newCid[i][1] >= currencyArr[i][0]){newCid[i][1]-=currencyArr[i][0];count++;}currencyArr[i].push(count);}
           //I had to add this extra line to ensure that the amount of money units is accurate. when it goes below 0.1, the program stops
           //(con't)before the smallest decimal. so for smaller decimals, the condition is changed to 0.
           else if (currencyArr[i][0] == 0.05){while(newCid[i][1] > 0){newCid[i][1]-=currencyArr[i][0].toFixed(1);count++;}currencyArr[i].push(count);}
            else {while(newCid[i][1] > 0){newCid[i][1]-=currencyArr[i][0];count++;}currencyArr[i].push(count);}
         }
       

    return cid;
  }
  



  console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
  