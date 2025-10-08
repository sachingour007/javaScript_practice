const person = {
	isHuman: false,
	printIntroduction() {
		console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
	},
};

// const newPerson = Object.create(person);
// newPerson.name = "sachin";
// console.log(Object.hasOwnProperty(newPerson));

// console.log(person);

const userDetails = {
	name: "sachin",
	add: "bundi",
};

const userDetails2 = {
	// name: "rahul",
	add: "kota",
	__proto__: userDetails,
};

console.log(userDetails2);

/**
 * __proto__ : when every object create, by default create the property __proto__.
 */
