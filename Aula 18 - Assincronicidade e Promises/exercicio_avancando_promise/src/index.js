import Spaceship from './spaceship'
import SpaceshipEngine from './spaceship_engine'
import SpaceshipShield from './spaceship_shield'

const sophia = new Spaceship("Sophia", 5, 10)
const amsterda = new Spaceship("Amsterdã", 10, 14)
const dwarfStart = new Spaceship("Estrela-Anã", 4, 20)

sophia.shield = 70
amsterda.shield = 40
dwarfStart.shield = 80

console.log(sophia)


const  sophiaEngine = new SpaceshipEngine(sophia)
const  amsterdaEngine = new SpaceshipEngine(amsterda)
const  dwarfStartEngine = new SpaceshipEngine(dwarfStart)



let sophiaCheckBattery =  sophiaEngine.checkCurrentCharge()
let sophiaCheckShield = sophiaEngine.executarOperacoes()

let amsterdaCheckBattery =  amsterdaEngine.checkCurrentCharge()
let amsterdaCheckShield = amsterdaEngine.executarOperacoes()

let dwarfStartCheckBattery =  dwarfStartEngine.checkCurrentCharge()
let dwarfStartCheckShield = dwarfStartEngine.executarOperacoes()


sophiaEngine.turnOn(sophiaCheckBattery, sophiaCheckShield)
amsterdaEngine.turnOn(amsterdaCheckBattery, amsterdaCheckShield)
dwarfStartEngine.turnOn(dwarfStartCheckBattery, dwarfStartCheckShield)

