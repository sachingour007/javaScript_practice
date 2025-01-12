//String Function :
// 1.slice(start, end)
// 2.substring(start, end)
// 4.indexOf(searchValue)
// 5.lastIndexOf(searchValue)
// 6.includes(searchValue)
// 7.startsWith(searchValue)
// 8.endsWith(searchValue)
// 9.replace(searchValue, newValue)
// 10.replaceAll(searchValue, newValue)
// 11.split(delimiter)
// 12.concat()
// 13.trim()
// 14.trimStart()
// 15.charAt(index)
// 16.charCodeAt(index)
// 17.repeat(count)

//String Methods

let alfa = "Yes I am Alfa";
// let newAlfa = alfa.slice(0, -6); It take the negative values.
// let newAlfa = alfa.substring(0, 5); //similer to slice but not take the nagetive values;
let newAlfa = alfa.indexOf("a"); //give index of first find element.

// console.log(newAlfa);

//First Word Capital

let str = "Hellochin";
function firstWordCap(str) {
  // console.log(str.substring(0));
  return str[0].toUpperCase() + str.substring(1, str.length);
}
const ans = firstWordCap(str);
console.log(ans);

//Captilize every word

let str1 = "hello world";

function wordCapitalFunc(str) {
  const wordArr = str.split(" ");
  const capResult = wordArr.map(
    (word) => word[0].toUpperCase() + word.slice(1)
  );
  return capResult.join(" ");
}

const capitalWord = wordCapitalFunc(str1);
console.log(capitalWord);
