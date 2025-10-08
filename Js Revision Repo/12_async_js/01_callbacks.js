function studentEntry(cb) {
	setTimeout(() => {
		console.log("admission done");
		cb();
	}, 2000);
}

function studentfeeRecord(cb) {
	setTimeout(() => {
		console.log("fee pending");
		cb();
	}, 3000);
}

function studentResult(cb) {
	setTimeout(() => {
		console.log("student pass");
		cb();
	}, 1000);
}

function callMe() {
    //Call back hell
	studentEntry(() => {
		studentfeeRecord(() => {
			studentResult(() => {
				console.log("all cbs done");
			});
		});
	});

	console.log("student Details");
}

callMe();
