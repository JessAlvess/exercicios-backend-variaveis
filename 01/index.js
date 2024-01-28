let altura = 1.79;
let peso = 90;

let imc = peso / (altura ** altura);

console.log(imc.toFixed(2));
console.log(' ');

if (imc < 18.5) {
    console.log(`Seu IMC é de ${imc.toFixed(2)} e você precisa comer um leitão inteiro!`);
} else if (imc >= 18.5 && imc <= 24.9) {
    console.log(`Seu IMC é de ${imc.toFixed(2)} e você pode comer um bis!`);
} else if (imc >= 25 && imc <= 29.9) {
    console.log(`Seu IMC é de ${imc.toFixed(2)} e você precisa de jogar um futebol de vez enquando!`);
} else if (imc >= 30 && imc <= 39.9) {
    console.log(`Seu IMC é de ${imc.toFixed(2)} e você precisa joga bola todos os dias!`);
} else {
    console.log(`Seu IMC é de ${imc.toFixed(2)} e você precisa ir ao médico!`);
}
