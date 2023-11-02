// inserindo variável que armazena o nome do jogador
let jogador = "Nymeria minha loba gigante"

// inserindo variável que armazena a quantidade de vitórias do jogador
let vitorias = 150

// inserindo variável que armazena a quantidade de derrotas do jogador
let derrotas = 10

// inserindo variável vazia tipo 'string' que armazenará o nível
let nivel = ""

// definindo função que calcule o saldo
function calcrank(vitorias,derrotas){
    let saldo = (vitorias - derrotas)
    return saldo;
}
let saldovitorias = calcrank(vitorias,derrotas)

// utilizando estruturas condicionais e operadores para obter o nível do jogador
if (vitorias <= 10){
    nivel = "Ferro"
}else if (vitorias >= 11 && vitorias <= 20){
    nivel = "Bronze"
}else if (vitorias >= 21 && vitorias <= 50){
    nivel = "Prata"
}else if (vitorias >= 51 && vitorias <= 80){
    nivel = "Ouro"
}else if (vitorias >= 81 && vitorias <= 90){
    nivel = "Diamante"
}else if (vitorias >= 91 && vitorias <= 100){
    nivel = "Lendário"
}else if (vitorias >= 101){
    nivel = "Imortal"
}

// mensagem de saída
console.log(jogador + " tem saldo de " + saldovitorias + " e está no nível " + nivel)
