// function Scope

function abc() {
  var hero = "salman";
  console.log(hero);
}
abc();

// console.log(hero);  Give the error reference error
// console.log(naam);
let naam = "saif";

{
  let superHero = "spiderman";
  console.log(superHero);
}
console.log(superHero);  //referenceError: not Define.
