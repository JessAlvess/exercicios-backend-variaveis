let montante = 90_000;
let capital = 60_000;
let meses = 24;
let aux = 1 / meses;
let aux2 = montante / capital;
let aux3 = aux2 ** aux;
let juros = aux3 - 1;
juros *= 100;
console.log(`A taxa de juros e de ${(juros).toFixed(2)}% a.m.`);