let diametro = 6;
let raio = diametro / 2;
let volume = (4 / 3) * Math.PI * (raio ** 3);
let volume2 = (4 / 3) * (raio ** 3);

console.log(`O volume de uma esfera de raio ${raio} e diametro ${diametro} é de ${volume2} PI ou ${volume.toFixed(2)}.`);