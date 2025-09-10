class Player {
    constructor(name, age, goal) {
        this.name = name;
        this.age = age;
        ((this.location = "rajshahi"), (this.goal = goal));
    }
    getPlayer() {
        return `${this.name},${this.age}`;
    }
    playerLocation() {
        return `${this.location}, ${this.goal}`;
    }
}
const newPlayer = new Player("Imran", 22);
const runPlayer = newPlayer.getPlayer();
console.log(runPlayer);
const newPlayer2 = new Player("nazir", 40);
const runPlayer2 = newPlayer2.getPlayer();
console.log(runPlayer2);
const location = new Player("imran", 22, "dhaka", 5);
const locationPlayer = location.playerLocation();
console.log(locationPlayer);
