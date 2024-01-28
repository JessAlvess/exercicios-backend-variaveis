let meuDinheiro = 80;
let tenis = 129.99;
let montanteDesconto = tenis - meuDinheiro;

let porcentagemDesconto = (montanteDesconto * 100) / tenis;

console.log(`Meu amigo, vou te dá ${(porcentagemDesconto).toFixed(2)}% de desconto!`);