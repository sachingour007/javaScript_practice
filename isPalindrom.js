const str = "racecar";

function isPalindrom(str) {
  str = str.toLowerCase().replace(/\W/g, "");
  let r_str = str.split('').reverse().join('');
  return r_str === str ? true : false
}

function findPalindrom(str){
    str = str.toLowerCase().replace(/\W/g, "");
    let i = 0;
    let j = str.length-1;
    while(i<j){
        if(str[i] !== str[j]){
            return false;
        }
        i++;
        j--;
    }
    return true;
}

console.log(isPalindrom(str));
console.log(findPalindrom(str));


