const hashTagGentrator = (str) => {
  if (str.trim(" ").length === 0) {
    return false;
  }
  let hashWord = str.split(" ");
  let ans = hashWord.map((st) => st.replace(st[0], st[0].toUpperCase()));
  return (ans = `#${ans.join("")}`);
};

console.log(hashTagGentrator("hello, i am Developer"));
