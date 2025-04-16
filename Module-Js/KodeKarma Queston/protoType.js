//Prototype Example
/*
const apiHandler = {
    fetch: function (endpoint) {
      console.log(`Fetch from Data ${this.baseUrl}${endpoint}`);
    },
  };
  
  const userApi = Object.create(apiHandler);
  userApi.baseUrl = "http//api.example.com/users/";
  
  const productApi = Object.create(apiHandler);
  productApi.baseUrl = "http//api.example.com/products/";
  
  userApi.fetch(123);
  productApi.fetch(123);
  
  console.log(userApi);
  */

//Question - 01
/*
function LivingBeing(name) {
  this.name = name;
  this.isAlive = true;
}

// Add describe method to LivingBeing prototype
LivingBeing.prototype.describe = function () {
  console.log(`${this.name} is alive: ${this.isAlive}`);
};

// Step 2: Create the derived constructor function
function Animal(name, species) {
  LivingBeing.call(this, name);
  this.species = species;
}

Animal.prototype = Object.create(LivingBeing.prototype);
Animal.prototype.constructor = Animal;

Animal.prototype.speak = function () {
  console.log(`I am a ${this.species} and my name is ${this.name}.`);
};

const tiger = new Animal("tiger", "abc");
tiger.speak();
tiger.describe();
console.log(tiger);
*/

//Question - 02
/*
function Animal(name, sound) {
  this.name = name;
  this.sound = sound;
}

// Add makeSound method to Animal prototype
Animal.prototype.makeSound = function () {
  console.log(`The ${this.name} says ${this.sound}.`);
};

// Step 2: Define the child constructor function
function Dog(name, sound) {
  // Call the parent constructor
  Animal.call(this, name, sound);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Override makeSound method in Dog prototype
Dog.prototype.makeSound = function () {
  console.log(`The dog ${this.name} barks: ${this.sound}! Woof Woof!.`);
};

const lion = new Animal("Lion", "Roar");
const buddy = new Dog("Buddy", "Bark");
console.log(lion);

lion.makeSound();
buddy.makeSound();
*/

//Question 4

// Step 1: Create the constructor function
function Vehicle(type, wheels) {
  this.type = type;
  this.wheels = wheels;
}

// Add describe method to Vehicle prototype
Vehicle.prototype.describe = function () {
  console.log(`This is a ${this.type} with ${this.wheels} wheels.`);
};

// tep 2: Create a prototype-based object using Object.create()
const ElectricVehicale = Object.create(Vehicle.prototype);
ElectricVehicale.batteryLife = 0;

// Step 3: Add additional properties and methods to ElectricVehicle
ElectricVehicale.batteryStatus = function () {
  return `Battery life is ${this.batteryLife} hours.`;
};

const car = new Vehicle("car", 4);
car.describe();

const tesla = Object.create(Vehicle.prototype);
console.log(tesla);
tesla.wheels = 4;
tesla.type = "Electric Car";
tesla.batteryLife = 12;

tesla.describe();

const calculator = {
  factor: 10,
  multiply(n) {
    console.log("Inside multiply:", this); // `this` ko log kar rahe hain
    // return this.factor * n;
  },
};

calculator.multiply(10);
