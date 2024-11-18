// Você foi designado para revisar e refatorar um código legado que realiza cálculos de estatísticas de uma empresa. 
// O código original é funcional, mas está difícil de entender e manter. 
// Sua tarefa é refatorar o código, aplicando pelo menos três técnicas de refatoração para torná-lo mais legível, eficiente e fácil de dar manutenção.

// Instruções:

// 1. Refatore o código original, aplicando pelo menos três técnicas de refatoração diferentes (Método de extração, Método em linha, Extração de variável, Divisão de variável temporária, Remoção de atribuições a parâmetros) .
// 2. Mantenha a funcionalidade do código original.
// 3. Você pode adicionar funções auxiliares, renomear variáveis e simplificar a lógica, se necessário.
// 4. Comente suas alterações explicando as técnicas de refatoração que foram aplicadas e por que elas melhoram o código.

/**
* Metodo de extração. 
* Realiza a soma dos valores do array conforme o código que estava inserido na função calcularMedia.
* Melhora o código porque pode ser reutilizada.
*/
function calcularSoma(valores){
    return valores.reduce((sum, valor) => sum + valor, 0);
}

/** 
* Recebe um array de números e a média e retorna a soma das diferenças quadradas.
*/
function calcularSomaDiferencasQuadradas(valores, media){
    return valores.reduce((sum, valor) => sum + (valor - media) ** 2, 0);
}

/**
* Extração de variável
* Recebe um array de números e retorna a média dos valores.
*/
function calcularMedia(valores) {
    const media = calcularSoma(valores) / valores.length;
    return media;
}

/**
* Divisão de variável temporária. 
* Evita a reutilização das variáveis para propósitos diferentes.
* Melhora o código porque previne erros.
*/
function calcularDesvioPadrao(valores) {
    const media = calcularMedia(valores);
    const somaDiferencasQuadradas = calcularSomaDiferencasQuadradas(valores, media);
    const variancia = somaDiferencasQuadradas / valores.length;
    const desvioPadrao = Math.sqrt(variancia);
    return desvioPadrao;
}

/**
* Formata o resultado para 2 casas decimais.
*/
function formatarResultado(valor){
    return valor.toFixed(2);
}

/**
* Teste do código.
*/
let valores = [12, 15, 18, 20, 22];
console.log("Média: " + formatarResultado(calcularMedia(valores)));
console.log("Desvio Padrão: " + formatarResultado(calcularDesvioPadrao(valores)));