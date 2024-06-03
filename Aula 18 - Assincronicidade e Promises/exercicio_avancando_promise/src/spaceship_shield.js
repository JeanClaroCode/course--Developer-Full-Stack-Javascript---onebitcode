export default class{
    constructor(spaceship) {
        this.spaceship = spaceship;
    }

   /* checkedShield() {
        let currentShield = this.spaceship.newShieldStatus();
        return new Promise((resolve, reject) => {
            if (currentShield < 100) {
                reject("O status do escudo é menor que 100");
            } else {
                resolve(currentShield);
            }
        });
    }
    */
}
