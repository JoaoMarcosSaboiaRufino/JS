/*Crie uma função que recebe um número como parâmetro e retorna a multiplicação de todos os números de 1 até esse número usando um loop.*/

function mult(numero) {

    let valor = 1

    for(let i = 1; i < numero; i++) {
        valor += (valor * i)
    }
    return valor
}

console.log(mult(x))