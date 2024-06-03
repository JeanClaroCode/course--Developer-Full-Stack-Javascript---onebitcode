export default class Spaceship {
    constructor(name, currentLoad, maximumCapacity){
        this.name = name;
        this.currentLoad = Number(currentLoad);
        this.maximumCapacity = Number(maximumCapacity);
    }

    percentageOfCurrentLoad() {
        let load = (this.currentLoad * 100 )/this.maximumCapacity
        return load
    }
    newShieldStatus(){
        let newShield = (this.shield * 2)
        return newShield
    }
}

