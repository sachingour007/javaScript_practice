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

let amount = Number(prompt("Please Enter the Amount."));

function discount(amount) {
  let ans = 0;
  if (amount >= 0 && amount <= 5000) {
    ans = amount;
  } else if (amount >= 5001 && amount <= 7000) {
    ans = amount - Math.floor((amount * 5) / 100);
  } else if (amount >= 7001 && amount <= 9000) {
    ans = amount - Math.floor((amount * 10) / 100);
  } else {
    ans = amount - Math.floor((amount * 20) / 100);
  }
  return ans;
}

const result = discount(amount);
console.log(result);
