//comandos de formatação de string

let textoQualquer = 'Olá João. '
let textoQualquer1 = 'Tudo bem?'
let espaco = ' '

//concatenar strings
let juntarConcatenacao = textoQualquer + ' ' + textoQualquer1

//concatenacao no meio de strings 
let concatenarNoMeio = 'Olá João.${espaco}' + textoQualquer1

//concatenação com outro método
let resutadoCompleto = textoQualquer.concat(textoQualquer1);

//maiuscula-toUpperCase() e minuscula-toLowerCase() 
let maiuscula = textoQualquer.toUpperCase()
let minuscula = textoQualquer.toLowerCase()

console.log(minuscula + maiuscula)



































