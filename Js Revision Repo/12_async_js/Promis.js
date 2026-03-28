async function getdata() {
	const res = await fetch("https://dummyjson.com/posts");
	const data = await res.json();
	return data;
}
async function getcard() {
	const res = await fetch("https://dummyjson.com/userss");
	const user = await res.json();
	return user;
}

Promise.all([getdata(), getcard()])
	.then((data) => {
		console.log("Data:", data);
	})
	.catch((err) => {
		console.log("Error:", err);
	});
