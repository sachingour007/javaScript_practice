function abc(a, b) {
  if (
    typeof a !== "number" ||
    typeof b !== "number" ||
    Number.isNaN(a) ||
    Number.isNaN(b)
  ) {
    console.log("please enter valid number");
    return;
  }

  return a + b;
}

console.log(abc(6, 5));
