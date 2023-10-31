/*Soma de Números Pares:
Escreva uma função que recebe um número como parâmetro e retorna a soma de todos os números pares até esse número.*/

function num(numero) {
    let valor = 0
    
    for (let i = 0 ;i <= numero; i++) {
        if( i % 2 == 0) {
            valor += i
        }
    }
    return valor
}

console.log(num())