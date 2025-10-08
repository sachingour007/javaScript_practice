/*
    1.readFile() → 2 sec delay ke baad "File read" return kare
    2.compressFile() → 2 sec delay ke baad "File compressed" return kare
    3.uploadFile() → 2 sec delay ke baad "File uploaded" return kare
 */

/*
function readFile(cb) {
	setTimeout(() => {
		console.log("file read");
		cb("Text.js");
	}, 2000);
}
function compressFile(fileName, cb) {
	setTimeout(() => {
		console.log("File compressed", fileName);
		cb("text.zip");
	}, 2000);
}
function uploadFile(comFile, cb) {
	setTimeout(() => {
		console.log("File uploaded", comFile);
		cb("file uploaded sucessfully");
	}, 2000);
}

*/

function readFile() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("file read");
			resolve("Text.js");
		}, 2000);
	});
}
function compressFile(fileName) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("File compressed", fileName);
			resolve("text.zip");
		}, 2000);
	});
}
function uploadFile(comFile) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("File uploaded", comFile);
			resolve("file uploaded sucessfully");
		}, 2000);
	});
}

function main() {
	//Promise

	readFile()
		.then((file) => compressFile(file))
		.then((compressedFile) => uploadFile(compressedFile))
		.then((msg) => console.log(msg))
		.catch((err) => console.log(err));

	// Call hell
	// readFile((fileName) => {
	// 	compressFile(fileName, (comFile) => {
	// 		uploadFile(comFile, (msg) => {
	// 			console.log(msg);
	// 		});
	// 	});
	// });
}

main();
