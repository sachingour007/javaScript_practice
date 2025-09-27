function Player(name, team, isGood, position) {
	this.name = name;
	this.team = team;
	this.isGood = isGood;
	this.position = position;
	this.changePosition = function (x, y) {
		this.position = [x, y];
	};
}

Player.prototype.greet = function(){
	console.log(`hey ${this.name}`);
	
}

let player1 = new Player("Ram", "B", true, [110, 30]);
let player2 = new Player("shyam", "B", true, [120, 330])
player1.changePosition(100, 300);
console.log(player1.greet());
console.log(Player.prototype, "20");
console.log(player1.__proto__, "21")

console.log(Object.getPrototypeOf(player1), "23")


