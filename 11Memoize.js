function memoize(fn) {
    let cache = {};
  return function (...args) {
    console.log(JSON.stringify(args));
        const key = JSON.stringify(args)
        if(key in cache){
            return cache[key]
        }else{
            const ans = fn.apply(this,args);
            cache[key] = ans;
            return ans
        }
  };
}

const sum = (a, b) => {
  let result = a + b;
  return result;
};


const abc = memoize(sum);
console.log(abc(2,2));


