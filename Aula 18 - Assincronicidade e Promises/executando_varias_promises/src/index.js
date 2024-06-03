const inscreaseVelocity = function(velocityToIncrease){
    return new Promise((resolve, reject) => {
        if(velocityToIncrease <= 0){
            reject("Frenagem acionada")
        } else { 
            resolve(velocityToIncrease * 0.9)
        }
    })
}

const newBatteryConsumption = function(currentVelocity, velocityIncrease){
    return new Promise((resolve, reject) => {
        let newBatteryConsumption = (currentVelocity + velocityIncrease) / 10000
        if(newBatteryConsumption > 0) {
            resolve(newBatteryConsumption)
        } else {
            reject("Consumo zerado!")
        }
    })
}

let velocity = 70

let velocityIncreased = inscreaseVelocity(velocity)
let BatteryConsumption = newBatteryConsumption(80, velocity)
Promise.all([velocityIncreased, BatteryConsumption]).then(results => {
    console.log(results)
}).catch(errors =>{
    console.log(errors)
})