//  Question - 02

/*
const arr = [1, 2, 3, 4, 5, 6];
const commands = [
  { start: 1, end: 4, operation: "reverse" },
  { start: 0, end: 3, operation: "sum" },
  { start: 2, end: 5, operation: "length" },
];

function processArray(arr, commands) {
  const result = [];
  commands.forEach(({ start, end, operation }) => {
    const slicedArray = arr.slice(start, end);
    
    switch (operation) {
      case "reverse":
        result.push(slicedArray.reverse());
        break;
      case "sum":
        result.push(slicedArray.reduce((sum, num) => sum + num));
        break;
      case "length":
        result.push(slicedArray.length);
        break;
      default:
        throw new Error("Invalid Operation")
    }
  });

  return result;
}

console.log(processArray(arr, commands));
*/

//Question - 03
/*
const employees = [
  { name: "Alice", salary: 6000, department: "Engineering" },
  { name: "Bob", salary: 4500, department: "Marketing" },
  { name: "Charlie", salary: 5500, department: "Sales" },
];

function processEmployees(employees) {
  return employees.map((emp) => {
    return {
      ...emp,
      annualSalary: emp.salary * 12,
      isEligibleForBonus: emp.salary >= 5000 ? true : false,
    };
  });
}

const result = processEmployees(employees);
console.log(result);
*/

// Question - 04

const employees = [
  { name: "Alice", salary: 6000, department: "Engineering", performance: 4 },
  { name: "Bob", salary: 4500, department: "Marketing", performance: 3 },
  { name: "Charlie", salary: 5500, department: "Sales", performance: 5 },
];

function calculateTotalBonuses(employees, minRating, bonusPercentage) {
  if (employees.length <= 0) {
    return 0;
  }
  const empMinRating = employees.filter((emp) => emp.performance >= minRating);
  const totalBonus = empMinRating.reduce((totalBonus, empMin) => {
    const annualBonus = empMin.salary * 12 * (bonusPercentage / 100);
    return annualBonus + totalBonus;
  }, 0);
  return totalBonus;
}

const ans = calculateTotalBonuses(employees, 4, 10);
console.log(ans);
