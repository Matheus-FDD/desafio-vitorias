const readline = require('readline-sync');

let vitoria = readline.questionInt("Quantas vitorias vc teve ?  ");
let derrota = readline.questionInt("Quantas derrotas vc tem ? ");
let nivel = ""

function calculoDeVitoria (){
     return  vitoria - derrota
    }

let delta = calculoDeVitoria()

if (delta <= 10) {
    nivel = "Ferro"

} else if (delta >= 11 && delta <= 20){
    nivel = "Bronze"
} else if (delta >=21 && delta <= 50){
    nivel = "Prata"
}else if (delta >= 51 && delta <= 80){
    nivel = "Ouro"
}else if (delta >= 81 && delta <= 90){
    nivel = "Diamante"
}else if (delta >= 91 && delta <= 100){
    nivel = "Lendário"
}else if (delta >= 101){
    nivel = "Imortal"
}

console.log("O Heroi tem o saldo de " + delta + " esta no nivel " + nivel)
