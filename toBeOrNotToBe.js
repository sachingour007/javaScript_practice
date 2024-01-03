const expect = function (val) {
  return {
    toBe: function (newVal) {
      if (val === newVal) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: function (newVal) {
      if (val !== newVal) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
};

const ans = expect(5).toBe(5);
expect(5).notToBe(6);
console.log(ans);
