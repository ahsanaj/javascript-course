function Plant(name, growthRate) {
    // this = {};
    this.name = name;
    this.isAlive = true;
    this.growthRate = growthRate;
    this.grow = function() {
            console.log(`${this.name} plant is growing ${this.growthRate}`);
        }
        // return this;
}

var p1 = new Plant("Hoya Carnosa", "slowly"); // creating a new instance of a plant constructor

var p2 = new Plant("Epipremnum Aureum", "quickly");