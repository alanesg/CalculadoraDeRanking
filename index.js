


//função e estrutura de decisão
function calcular(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas
    let nivelHeroi

    {
        if (saldoVitorias < 10) {
            nivelHeroi = " FERRO!"
        } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
            nivelHeroi = " BRONZE!"
        } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
            nivelHeroi = "PRATA!"
        } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
            nivelHeroi = "OURO!"
        } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
            nivelHeroi = "DIAMANTE!"
        } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
            nivelHeroi = "LENDÁRIO!"
        } else {
            nivelHeroi = "IMORTAL!"
        }

        return {saldoVitorias, nivelHeroi}
       
    }

}
    
 while (true){
    let vitorias =( 80)
  let derrotas = ( 25)

    let resultado = calcular (vitorias, derrotas)
    console.log(`O Herói tem o saldo de: ${resultado.saldoVitorias} e está no nível: ${resultado.nivelHeroi}`);

    break
 }

