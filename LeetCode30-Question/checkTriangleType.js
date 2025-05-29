const checkTriangleType = (a, b, c) => {
  if (a === b && b === c) {
    return "equilateral";
  } else if (a === b || b === c || c === a) {
    return "isosceles";
  } else {
    return "scalene";
  }
};

console.log(checkTriangleType(3, 3, 3));
console.log(checkTriangleType(3, 4, 3));
console.log(checkTriangleType(5, 8, 6));
