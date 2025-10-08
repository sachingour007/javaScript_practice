/**
 * Q1: User Data Fetch Simulation

    👉 Callback Hell Version likho:

    01.getUser() → 2 sec me ek user ka id return kare.

    02.getOrders(userId) → 2 sec me us user ke orders return kare.

    03.getOrderDetails(orderId) → 2 sec me order ka detail return kare.

    Task: Isko callback se likho → phir Promises → phir async/await.
 */

//Callback Hell Expample
/*
function getUser(callback) {
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("user get");
			callback({ id: 1, name: "sachin" });
		}, 2000);
	});
}

function getOrders(userId, callback) {
	setTimeout(() => {
		console.log("oder fetch from userId :", userId);
		callback(["order1", "order2"]);
	}, 2000);
}

function getOrderDetails(orderId, callback) {
	setTimeout(() => {
		console.log("order details fetched", orderId);
		callback({ orderId, item: "laptop", price: 50000 });
	}, 2000);
}

*/

//Converting in Promise

function getUser() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("user get");
			resolve({ id: 1, name: "sachin" });
		}, 2000);
	});
}

function getOrders(userId) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("oder fetch from userId :", userId);
			// const error = new Error("code failed")
			// reject(error)
			resolve(["order1", "order2"]);
		}, 2000);
	});
}

function getOrderDetails(orderId) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("order details fetched :", orderId);
			resolve({ orderId, item: "laptop", price: 50000 });
		}, 2000);
	});
}

async function getDetails() {
    console.log("hello");
	try {
		const user = await getUser();
		const order = await getOrders(user.id);
		const orderId = await getOrderDetails(order);
        console.log(orderId);
        
	} catch (error) {
		console.log(error);
	}
    console.log("hello", 1);
    

	// getUser()
	// 	.then((user) => getOrders(user.id))
	// 	.then((order) => getOrderDetails(order[0]))
	//     .then((details) => console.log(details))
	// 	.catch((err) => console.log(err));

	// getUser((user) => {
	// 	console.log(user);
	// 	getOrders(24,(orderList) => {
	// 		console.log(orderList);
	// 		getOrderDetails(123456, (orderDetails) => {
	// 			console.log(orderDetails);
	// 		});
	// 	});
	// });
}

getDetails();
