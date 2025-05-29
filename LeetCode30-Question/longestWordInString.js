const findLongestWord = (str) => {
  if (str.trim(" ").length === 0) {
    return false;
  }

  const word = str.split(" ");
  return word.reduce(
    (acc, curr) => (curr.length > acc.length ? curr : acc),
    ""
  );
};

console.log(findLongestWord("Hello I am Developer an you ?"));
