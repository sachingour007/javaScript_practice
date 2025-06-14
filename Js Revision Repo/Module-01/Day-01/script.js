var a = 10;

function loobhai() {
  for (var a = 0; a < 5; a++) {
    console.log(a);
  }
}
loobhai();

for (var a = 0; a < 5; a++) {
  setTimeout(() => {
    console.log(a);
  }, 1000);
}

console.log(a);

console.log(b);

let b = 10;
{
  let b = 11;
  console.log(b);
}
console.log(b);

