class Player {
	constructor(name, team, isGood, position) {
		this.name = name;
		this.team = team;
		this.isGood = isGood;
		this.position = position;
	}

	changePosition(x, y) {
		this.position = [x, y];
	}
}


const player1 = new Player("Ram", "B", true, [110, 30])
console.log(player1);
player1.changePosition(200, 600);
console.log(player1);
