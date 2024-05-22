import Spaceship from './spaceship'
import SpaceshipEngine from './spaceship_engine'

const sophia = new Spaceship("Sophia", 5, 10)
const amsterda = new Spaceship("Amsterdã", 10, 14)
const dwarfStart = new Spaceship("Estrela-Anã", 4, 20)

const  sophiaEngine = new SpaceshipEngine(sophia)
const  amsterdaEngine = new SpaceshipEngine(amsterda)
const  dwarfStartEngine = new SpaceshipEngine(dwarfStart)

sophiaEngine.turnOn()
amsterdaEngine.turnOn()
dwarfStartEngine.turnOn()

console.log("Promises")