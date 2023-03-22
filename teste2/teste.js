const dados = require('./dados.json');

// Calcula o menor valor de faturamento diário
const menor = dados.reduce((acc, { valor }) => valor < acc ? valor : acc, Number.MAX_SAFE_INTEGER);

// Calcula o maior valor de faturamento diário
const maior = dados.reduce((acc, { valor }) => valor > acc ? valor : acc, Number.MIN_SAFE_INTEGER);

// Calcula a média mensal de faturamento diário (excluindo dias sem faturamento)
const valores = dados.filter(({ valor }) => valor > 0).map(({ valor }) => valor);
const media = valores.reduce((acc, valor) => acc + valor, 0) / valores.length;

// Conta o número de dias com faturamento diário superior à média mensal
const acimaDaMedia = dados.filter(({ valor }) => valor > media).length;

// Imprime os resultados
console.log(`Menor valor de faturamento diário: ${menor}`);
console.log(`Maior valor de faturamento diário: ${maior}`);
console.log(`Dias com faturamento diário acima da média mensal: ${acimaDaMedia}`);