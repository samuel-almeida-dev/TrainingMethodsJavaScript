// Meu array;
const meuArray = [10, 20, 2, 9, 43, 5, 23, 8, 15];

// Função usando filter para filtrar elementos de um array;
function filtrarMenoresQueLimite(arr, limite) {
    // O método filter está sendo utilizado para retornar um novo array contendo elementos menores que o limite;
    return arr.filter((value) => {
      return value < limite;
    });
  }
  
  // Exemplo de uso
  const resultado = filtrarMenoresQueLimite(meuArray, 25);
  console.log(`Utilizando o método filter: ${resultado}`);

//

// Função usando reduce para somar elementos de um array;
function somarElementos(arr) {

    // O método reduce recebe uma função de callback e um valor inicial (0 no nosso caso).
    return arr.reduce((acumulador, elementoAtual) => 
      acumulador + elementoAtual, 0);

  }

  // Exemplo de uso
const resultadoSoma = somarElementos(meuArray);
console.log(`Utilizando o método reduce, o acumulado do array é de: ${resultadoSoma}`);

//

// Função usando o splice para remover elementos;
function removerElementos(arr, indiceInicio, quantidade) {
  
    // Usa o método splice para remover os elementos
    // O primeiro argumento (1) é o índice onde começamos a remoção.
    // O segundo argumento (2) é o número de elementos a serem removidos.
    const elementosRemovidos = arr.splice(indiceInicio, quantidade);
  
    // Retorna os elementos removidos
    return elementosRemovidos;
  }
  
  // Exemplo de uso:
  const elementosRemovidos = removerElementos(meuArray, 1, 2);
  console.log("Array após a remoção: ", meuArray); 
  console.log("Elementos removidos: ", elementosRemovidos); 

