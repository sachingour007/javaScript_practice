function callback(cb) {
  console.log("first me chalunga");
  cb("uske baad me chalunga");
}

callback((a) => {
  console.log(a);
});

setTimeout(() => {
  console.log("hello");
}, 1000);
