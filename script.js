function checkCashRegister(price, cash, cid) {
  let total = cash - price;
  let status = ["OPEN", "CLOSED", "INSUFFICIENT_FUNDS"];
  let cUnit = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  let change = [];

 let caja = cid.reduce((caja, plata, i) => caja + plata[1], 0)
 if(caja == total){
     return {status: status[1], change: cid}
 }
 for (let i = cUnit.length; i >= 0; i--){
   if(cUnit[i] <= total && cid[i][1] > 0.0){
     if(cid[i][1] / cUnit[i] >= total / cUnit[i]){
      change.push([cid[i][0], cUnit[i] * Math.floor(total / cUnit[i])]);
      total -= cUnit[i] * Math.floor(total / cUnit[i]);
       total = Math.round(total * 100) / 100;
         }
     if(cid[i][1] / cUnit[i] < total / cUnit[i]){
      change.push([cid[i][0], cUnit[i] * Math.floor(cid[i][1] / cUnit[i])]);
      total -= cUnit[i] * Math.floor(cid[i][1] / cUnit[i]);
       total = Math.round(total * 100) / 100;
     }
     }
 }
if(total===0){
     return{status: status[0], change}
}
else{
    return {status: status[2], change:[]}
}
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
