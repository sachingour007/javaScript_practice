//Normal Function

function abc() {  //Function Statement
  console.log(arguments);
}

abc(2, 3);

//arrow function 
const xyz = (...arg) => {
  console.log(arg);
};
xyz(4, 5, 6, 7, 8, 9);


//Clouser example

const closerss = () => {
  let a = 10;
  function y() {
    console.log(a);
  }
  y()
};

closerss();
