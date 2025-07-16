function matchMaking(vitorias = 0, derrotas = 0) {
    return vitorias - derrotas
}

let saldoDeRankeadas = matchMaking(103, 52);

if (saldoDeRankeadas <= 10) {
    console.log(`O Herói tem de saldo de ${saldoDeRankeadas} vitórias e está no nível de Ferro`)
    
} else if (saldoDeRankeadas <= 20) {
    console.log(`O Herói tem de saldo de ${saldoDeRankeadas} vitórias e está no nível de Bronze`)
    
} else if (saldoDeRankeadas <= 50) {
    console.log(`O Herói tem de saldo de ${saldoDeRankeadas} vitórias e está no nível de Prata`)
} else if (saldoDeRankeadas <= 80) {
    console.log(`O Herói tem de saldo de ${saldoDeRankeadas} vitórias e está no nível de Ouro`)
} else if (saldoDeRankeadas <= 90) {
    console.log(`O Herói tem de saldo de ${saldoDeRankeadas} vitórias e está no nível de Diamante`)
} else if (saldoDeRankeadas <= 100) {
    console.log(`O Herói tem de saldo de ${saldoDeRankeadas} vitórias e está no nível de Lendário`)
} else if (saldoDeRankeadas > 100) {
    console.log(`O Herói tem de saldo de ${saldoDeRankeadas} vitórias e está no nível de Imortal`)
}