const fruitsArr = ["apple", "banana", "orange", ["yes", "No"]];
// const newFruits = fruitsArr;
// newFruits.push("mango");
// console.log(newFruits);
// console.log(fruitsArr);



//Shallow Copy
/*
const newFruits = [...fruitsArr];
newFruits.push("mango");
newFruits[3].push("others");
console.log(newFruits);
console.log(fruitsArr);
*/


//DeepCopy

// const newFruits = JSON.parse(JSON.stringify(fruitsArr));
// newFruits[3].push("others");
// console.log(newFruits);
// console.log(fruitsArr);

const newFruits = structuredClone(fruitsArr);
newFruits[3].push("others");
console.log(newFruits);
console.log(fruitsArr);

// Note => same work for Object Also
