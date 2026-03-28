# 📘 JavaScript Prototype, **proto**, and Prototype Chain

---

## 🧠 1. What is Prototype?

- In JavaScript, **every object has a hidden property** called `[[Prototype]]`
- It is used for **inheritance**
- We can access it using:
   - `__proto__` (not recommended in production)
   - `Object.getPrototypeOf(obj)` ✅

---

## 🔗 2. What is `__proto__`?

- `__proto__` is a getter/setter for `[[Prototype]]`
- It points to the **parent object**

```js
const obj = {};
console.log(obj.__proto__ === Object.prototype); // true
```

---

## 🧱 3. What is `prototype`?

- `prototype` is a property of **functions (constructors)**

```js
function Person() {}
console.log(Person.prototype);
```

### 🔥 Important Rule:

> `prototype` belongs to functions,
> `__proto__` belongs to objects

---

## ⚙️ 4. How Objects are Linked

```js
function Person(name) {
	this.name = name;
}

const p1 = new Person("Sachin");
```

### Chain:

```
p1 → Person.prototype → Object.prototype → null
```

---

## 🔄 5. Prototype Chain

When accessing a property:

```js
p1.sayHello();
```

JavaScript searches in order:

1. Inside `p1`
2. Inside `Person.prototype`
3. Inside `Object.prototype`
4. Stops at `null`

---

## 🧪 6. Example with Method

```js
function Person(name) {
	this.name = name;
}

Person.prototype.sayHello = function () {
	return `Hello ${this.name}`;
};

const p1 = new Person("Sachin");
```

✔️ `sayHello` is shared across all instances

---

## ❌ 7. Wrong Way (Inside Constructor)

```js
function Person(name) {
	this.name = name;

	this.sayHello = function () {
		return `Hello ${this.name}`;
	};
}
```

### Problem:

- New function created for every instance ❌
- Memory inefficient ❌

---

## ⚡ 8. Object.create()

```js
const parent = {
	greet() {
		return "hello";
	},
};

const child = Object.create(parent);
```

### Chain:

```
child → parent → Object.prototype → null
```

---

## 💣 9. Special Case: Object.create(null)

```js
const obj = Object.create(null);
```

### Features:

- No prototype
- No `toString`, `hasOwnProperty`

✔️ Used for **pure dictionaries/maps**

---

## ⚠️ 10. Arrow Function Warning

```js
Person.prototype.sayHello = () => {
	console.log(this.name);
};
```

❌ `this` will NOT refer to object
✔️ Use normal function instead:

```js
Person.prototype.sayHello = function () {
	console.log(this.name);
};
```

---

## 🎯 11. Key Interview Points

- JavaScript uses **prototypal inheritance**
- Objects inherit from other objects
- `prototype` → functions
- `__proto__` → objects
- Methods should be on prototype (memory efficient)
- Arrow functions should NOT be used for methods

---

## 🚀 12. Final Summary

```
Instance → Constructor.prototype → Object.prototype → null
```

✔️ Property lookup follows this chain
✔️ This is called the **Prototype Chain**

---

## 🧠 One Line to Remember

> "JavaScript uses prototypal inheritance where objects inherit properties from other objects via the prototype chain."

---
