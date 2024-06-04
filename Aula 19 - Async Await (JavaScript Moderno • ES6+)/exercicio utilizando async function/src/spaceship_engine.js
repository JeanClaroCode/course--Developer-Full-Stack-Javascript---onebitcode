export default class{
    constructor(spaceship){
        this.spaceship = spaceship
    }

    async turnOn(){
        try 
        {   
        let currentChargeChecking = this.checkCurrentCharge()
        let shieldChecking = this.testShield()
        let results = await Promise.all([currentChargeChecking, shieldChecking])
        let newShield = await this.shieldNormalizer(results[1])
            this.spaceship.shield = newShield
            console.log(`(${this.spaceship.name}) Partida autorizada: Escudo (${this.spaceship.shield}) - Carga(${this.spaceship.currentCharge}GJ)`)
        }   
        
        catch(error) 
            {
                console.log(`(${this.spaceship.name}) Partida não autorizada: ${error}`)
            }
        }
        
    async checkCurrentCharge() {
        let currentCharge = this.spaceship.percentageOfCurrentLoad()
        if(currentCharge >= 30){
            return currentCharge
        } else {
            return Promise.reject(`Carga em apenas ${currentCharge}`)

        }
    }

    

    async testShield(){
            let doubleShield = this.spaceship.shield * 2
            if(doubleShield >= 100 ) {
                return doubleShield
            }else {
                return Promise.reject(`Escudo em sobrecarga`)
        }
      
    }

    async shieldNormalizer() {
        let shield = await this.testShield()
        let normalizedShield = shield * 0.7
        if(normalizedShield > 120) {
            Promise.reject(`Escudo em supercarga`)
        }else {
            return normalizedShield
        }
}
}