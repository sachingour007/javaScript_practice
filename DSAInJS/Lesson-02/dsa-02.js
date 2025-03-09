//If Else Statement

/*
// let ans = Number(prompt("What is your Age ?"));

if (isNaN(ans)) {
  console.log("Wrong Input");
} else if (ans >= 18) {
  console.log("you can vote");
} else {
  console.log("You can't vote");
}
*/
// Question Discount Amount

/*
let amount = Number(prompt("Please Enter the Amount."));

function discount(amount) {
  let ans = 0;
  let dis = 0;

  if (amount >= 0 && amount <= 5000) {
    dis = 0;
  } else if (amount >= 5001 && amount <= 7000) {
    dis = 5;
  } else if (amount >= 7001 && amount <= 9000) {
    dis = 10;
  } else {
    dis = 20;
  }

  ans = amount - Math.floor((amount * dis) / 100);
  return ans;
}

const result = discount(amount);
console.log(result);
*/

//Question = 03 Bill Pay ===>  Important

// let unit = Number(prompt("Please Enter Units"));

function unitAmount(unit) {
  let amount = 0;
  if (unit > 400) {
    amount = (unit - 400) * 13;
    unit = 400;
  }
  if (unit > 200 && unit <= 400) {
    amount += (unit - 200) * 8;
    unit = 200;
  }
  if (unit > 100 && unit <= 200) {
    amount += (unit - 100) * 6;
  }

  amount += unit * 4;
  return amount;
}

const payableAmount = unitAmount(700);
console.log(payableAmount);

//Question ==> 04 Currency Count

let userAmount = 4823;

function currencyCount(amt) {
  if (amt >= 500) {
    console.log("500 notes : " + Math.floor(amt / 500));
    amt = amt % 500;
  }
  if (amt >= 200) {
    console.log("200 notes : " + Math.floor(amt / 200));
    amt = amt % 200;
  }
  if (amt >= 100) {
    console.log("100 notes : " + Math.floor(amt / 100));
    amt = amt % 100;
  }
  if (amt >= 50) {
    console.log("50 notes : " + Math.floor(amt / 50));
    amt = amt % 50;
  }
  if (amt >= 20) {
    console.log("20 notes : " + Math.floor(amt / 20));
    amt = amt % 20;
  }
  if (amt >= 10) {
    console.log("10 notes : " + Math.floor(amt / 10));
    amt = amt % 10;
  }
  if (amt >= 5) {
    console.log("5 notes : " + Math.floor(amt / 5));
    amt = amt % 5;
  }
  if (amt >= 2) {
    console.log("2 notes : " + Math.floor(amt / 2));
    amt = amt % 2;
  }
  if (amt === 1) {
    console.log("1 notes : " + Math.floor(amt / 1));
    amt = amt % 1;
  }
}

currencyCount(userAmount);

//Ternary Opratior  ? :
//Nested ternary Operator

let num = 10;

console.log(num > 5 ? "yes" : "No");
console.log(num > 11 ? "yes" : num < 5 ? "No" : "5 se Bada hai");
