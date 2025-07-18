//Function keyword Normal Function

function print() {
  console.log("hello World");
}

print(); // hello world

//Anonymous Function

const hello = function () {
  console.log("hello");
};

hello();

//Named Function Expression

const Namefunc = function cal() {
  console.log("call");
};

Namefunc();

//Arrow Function

const sum = (a, b) => {
  console.log(a + b);
};
sum(1, 2);

//Immediately Invoked Function Expressions (IIFEs):

(function () {
  console.log("hello");
})();
