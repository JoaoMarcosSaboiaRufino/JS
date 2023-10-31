//comandos de análise de string

let stringQualquer = 'Olá João'


//para ver o comprimento de uma string (OBSERVAÇÃO: os espaços tambem são considerados)
function comprimentoString(string) {
    return string.length
}

//console.log(comprimentoString(stringQualquer))

//para ver a posição de tal palavra, letra ou número em uma string
function procurar(string) {
    return stringQualquer.indexOf(string)
}

//console.log(procurar(''))

//retorna uma partição desejada da string
function pedaco(n1, n2) {
    return stringQualquer.substring(n1, n2)
}

//console.log(pedaco(4, 7))

//transforma uma string em varias partições ou em uma array
function particao(caractere) {
    return stringQualquer.split(caractere)
}

//console.log(particao(' '))

//trocar palavras ou partes de uma string
function trocar(velho, novo) {
    return stringQualquer.replace(velho, novo)
}

//console.log(trocar('João', 'Marcos'))






