// let num = 5;

// function createScoreTracker(n) {
//   let newVal = n;
//   return function tracker() {
//     return newVal++;
//   };
// }

// const track = createScoreTracker(num);
// console.log(track());
// console.log(track());
// console.log(track());

/**
    function index(value) {
      return function (value) {
        console.log(typeof value);
        if (typeof value === 'number' || (typeof value === 'string' && !isNaN(Number(value))))  {
          return true;
        }
        return false;
      };
    }
    const isValidate = index();
    console.log(isValidate("a"));
    console.log(isValidate(11));
    console.log(isValidate("12"));

    console.log(isNaN("abc"), "29");
 */

/*
function removeK(val) {
  return val.replaceAll("K", "");
}
console.log(removeK("KodeKarma"));
*/

/*
function sum(a, b) {
  if(typeof a === 'number'  && typeof b === 'number' ){
    return a + b;
  }
  return a.toString() + b.toString()
}
console.log(sum(true, 10));
console.log(sum("5", 10));
*/

/*
var fruit = "apple";

function checkFruitScope() {
  if(true){
    let fruit = 'orange';
    console.log('Inside block:', fruit);
  }
  console.log('Outside block:', fruit);
}
checkFruitScope();
*/

/*
function BankAccount(initialBalance) {
  var balance = initialBalance;
  return {
    deposit: function (amount) {
      balance += amount;
    },
    withdraw: function (amount) {
      if (balance >= amount) {
        balance -= amount;
      } else {
        console.log("insufficient funds");
      }
    },
    getBalance: function () {
      return balance;
    },
  };
}

const account1 = BankAccount(1000);
const account2 = BankAccount(500);

account1.deposit(500);
console.log(account1.getBalance());

account1.withdraw(200);
console.log(account1.getBalance());

account2.deposit(100);
console.log(account2.getBalance());

console.log(account1.balance);
*/

///****Hoisting Questions */

var name = "sachin";
(function () {
  var helo = "rahul";
  console.log(helo);
})();
