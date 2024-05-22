import Spaceship from './spaceship'

let spaceships = [
    new Spaceship("Sophia", 5, 10),
    new Spaceship("Amsterdã", 10, 14),
    new Spaceship("Estrela-Anã", 4, 20),
];

class SpaceshipEngine {
    ligar(spaceships){

spaceships.forEach(spaceship => {
    let percentageNumber = spaceship.percentageOfCurrentLoad().toFixed(0);
    
    return new Promise(function(resolve, reject){ 
        if(percentageNumber > 30 ){
            resolve(percentageNumber)
        } else{
            reject(percentageNumber)
        }
    console.log(percentageNumber)
        
    }).then(percentage => {
        console.log(`${spaceship.name} Partida autorizada: carga atual em ${percentage}%`)
    }).catch(percentage=> {
        console.log(`${spaceship.name} Partida não autorizada. Carga em ${percentage}%`)
    })
    
  

})

}}
const instancia2 = new SpaceshipEngine();

instancia2.ligar(spaceships)