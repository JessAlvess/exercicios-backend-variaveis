let p0 = 1000;
let x = 4;
let tempo = 7;
let p;

p = p0 * (x ** (tempo/7));

console.log(`Relatório estatístico semanal: Levando em cosideração os dados repassados pelas Secretarias de Saúde dos Estados constatamos que após ${tempo} dias, o total de pessoas infectadas será de ${p.toFixed(0)}, uma vez que inicialmente existiam ${p0} pessoas infectadas na data da coleta dos dados.`);
