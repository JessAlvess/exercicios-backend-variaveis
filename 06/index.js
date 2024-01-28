let distPercorrida = 500;
let tempo = 10;
let conversão = 3.6;

let velocidadeMediaMetrosPorSegundo = distPercorrida / tempo;

let velocidadeMediaKmPorHora = velocidadeMediaMetrosPorSegundo * conversão;

console.log(`A sua velocidade média é de ${velocidadeMediaKmPorHora.toFixed(2)}km/h. Pra um humano até que você é bem rápido!`);