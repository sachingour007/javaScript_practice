function curry(fn) {
	return function curriedSum(...args) {
		if (args.length >= fn.length) {
			return fn(...args);
		} else {
			return function (...nextargs) {
				return curriedSum(...args, ...nextargs);
			};
		}
	};
}
function sum(a, b, c) {
	return a + b + c;
}
const curriedSum = curry(sum);
// console.log(curriedSum(1)(2)(3));

// function sumAll(...args) {
//   console.log(
//     [...args].reduce((acc, cur) => {
//       return acc + cur;
//     }, 0)
//   );
// }

// sumAll(1, 2, 3, 45, 6, 9);

function demo(...args) {
	return function (b) {
		// console.log(args, b);
	};
}

const a = demo(1, 2, 3, 4, 5)(8); // [1,2,3,4,5]
// console.log(a);

function cur(...args) {
	return function (...nextargs) {
		// console.log("args:", args, "nextargs:", nextargs);
		return cur(...args, ...nextargs); // 👈 join yaha hota hai
	};
}

// cur(1)(2, 3)(5);

function makeCounter(initialValue = 0) {
  let count = initialValue
	const counter = {
		increment: function () {
			return count = count + 1;
		},
		decrement: function () {
			initialValue - 1;
		},
		reset: function () {
			initialValue = 0;
		},
	};

	return counter;
}


const counter = makeCounter(5);
console.log(counter.increment());
