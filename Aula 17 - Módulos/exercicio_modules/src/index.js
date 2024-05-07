import Planet from "./planet";

var auConversionToKilometer  = 149587870;

let planets = [
    ["Mercúrio", 0.39],
    ["Venus", 0.72],
    ["Terra", 1],
    ["Marte", 1.52],
    ["Jupiter", 5.2],
    ["Saturno", 9.53],
    ["Urano", 19.1],
    ["Netuno", 30]
]

function criarInstanciasPlanetas(arrayPlanetas) {
    let instanciasPlanetas = [];
    for (let i = 0; i < arrayPlanetas.length; i++) {
        let nome = arrayPlanetas[i][0];
        let numeroOriginal = arrayPlanetas[i][1];
        let numeroModificado =  numeroOriginal * auConversionToKilometer;
        let numeroFormatado = numeroModificado.toFixed(2)
        instanciasPlanetas.push(new Planet(nome, numeroOriginal, numeroFormatado));
    }

    return instanciasPlanetas;
}


let instanciasPlanetas = criarInstanciasPlanetas(planets);
console.log(instanciasPlanetas)

