//Calculator

const calculator = {
  sum: function () {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
  read(a, b) {
    this.a = a;
    this.b = b;
  },
};

// calculator.read(5, 6);
// console.log(calculator.sum());
// console.log(calculator.mul());

// Chaining Objects Task

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this
  },
  down() {
    this.step--;
    return this
  },
  showStep() {
    console.log(this.step);
    return this
  },
};

ladder.up().up().down().showStep().down().showStep();
