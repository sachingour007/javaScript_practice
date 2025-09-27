//Object Literal

const player1 = {
	name: "rahul",
	team: "A",
	isGood: true,
	position: [100, 200],
	changePosition: function () {
		this.position = [300, 500];
	},
};

player1.changePosition();
console.log(player1);

const player2 = {
	name: "hemant",
	team: "B",
	isGood: true,
	position: [150, 250],
	changePosition: function () {
		this.position = [350, 550];
	},
};

player2.changePosition();
console.log(player2);


/**
 * Problem is we useing repeative work becase same method we are calling in both objects and every player has own object and menthod, using the memory
 */