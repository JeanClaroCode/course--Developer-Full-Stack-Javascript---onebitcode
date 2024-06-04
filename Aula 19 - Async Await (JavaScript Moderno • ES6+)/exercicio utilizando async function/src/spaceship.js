export default class Spaceship {
    constructor(name, currentCharge, maximumCapacity, shield){
        this.name = name;
        this.currentCharge = Number(currentCharge);
        this.maximumCapacity = Number(maximumCapacity);
        this.shield = shield
    }

    percentageOfCurrentLoad() {
        let load = (this.currentCharge * 100 )/this.maximumCapacity
        return load
    }
}


