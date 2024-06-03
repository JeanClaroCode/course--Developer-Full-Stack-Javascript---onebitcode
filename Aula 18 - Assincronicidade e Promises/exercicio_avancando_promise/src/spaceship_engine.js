export default class{
    constructor(spaceship){
        this.spaceship = spaceship
    }


    turnOn( fds, seila){
        Promise.all([seila, fds]).then(
            this.executarOperacoes().then(valor=>{
                if(valor < 120){
                console.log(`${this.spaceship.name}: Escudo atual da nave ${valor}`)}
            })
        ).catch(errors=>{
         console.log(errors)
        }
        )
     }

    checkCurrentCharge() {
        return new Promise((resolve, reject) => {
            let currentCharge = this.spaceship.percentageOfCurrentLoad()
            if(currentCharge >= 30){
                resolve(currentCharge)
            } else {
                reject(`${this.spaceship.name} Partida não autorizada: carga em apenas ${currentCharge}%`);
            }

        })
    }
    checkedShield() {
        let currentShield = this.spaceship.newShieldStatus();
        return new Promise((resolve, reject) => {
            if (currentShield < 100) {
                reject(`${this.spaceship.name}: ${currentShield}% Shield insuficiente`);
            } else {
                resolve(currentShield);
            }
        })
    }
    normalizingShieldCharge(actualCharge){
        return new Promise((resolve, reject) => {
            let newShield = Number(actualCharge * 0.70)
            if(newShield > 120){
                reject()
            } else{
                resolve(newShield)
            }
        })
    }

    executarOperacoes(){
        return this.checkedShield()
        .then(resultadoPrimeiro => {
          
            return this.normalizingShieldCharge(resultadoPrimeiro)
        })
        .then(resultadoSegunda=> {
            
            this.spaceship.shield = resultadoSegunda
            return resultadoSegunda
        })
        .catch(erro=> {
            console.log(`${erro}`)
        }
        )
    }

}  
