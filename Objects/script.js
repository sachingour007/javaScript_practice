//----------Multiple Ways to Create a Objects---------//

// 01. Object Literals

const obj = {
	name: "sachin",
	age: 26,
	add: "Bundi",
};

console.log(obj.__proto__);

//02. Object Constructor

const obj1 = new Object({ hero: "akshay", age: 26 });
console.log(obj1);

// 03. ES6 Classes

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
}

const newObj = new Person("rahul", 26);
console.log(newObj);

// 04. Object.Create

const personCount = Object.create({});
console.log(personCount, "36");

//Function Constructor

function PersonDetails(name) {
	this.name = name;
}

//Here add the method via prototype every instance can use that method
PersonDetails.prototype.sayHello = function () {
	console.log(this.name);
};

const P1 = new PersonDetails("Ram");
console.log(P1.sayHello());

console.log(Object.getPrototypeOf(P1));
