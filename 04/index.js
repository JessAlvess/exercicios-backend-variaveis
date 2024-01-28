let montante;
let capital = 1000.00;
let juros = 0.125;
let tempo = 5;
let aux = 1 + juros;
let aux2 = Math.pow(aux, tempo);
montante = capital * aux2;

console.log(`Olá, aqui é o gerente do seu banco, se o senhor aplicar o valor de R$${capital} que está parado na sua conta durante ${tempo} meses a uma taxa de juros de ${juros * 100}% a.m, terá um montante de ${montante.toFixed(2)}, vamos contratar? Estou esperando seu contato.`);