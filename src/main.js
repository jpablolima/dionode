const player1 = {
    Nome: "Mario",
    Velocidade: 4,
    Manobrabilidade: 3,
    Poder: 3,
    Pontos: 0,
};

const player2 = {
    Nome:  "Luigi",
    Velocidade: 3,
    Manobrabilidade: 4,
    Poder: 4,
    Pontos: 0,
};

//console.log(player1, player2);

async function rollDice(){
    return Math.floor(Math.random() * 6) + 1;
}

async function playRaceEngine(character1, character2){
    for (let round = 1; round <= 5; round++) {
        console.log (`🚦 Rodada ${round}`);
    }
}


async function main(){
    console.log(`🏁🚗Corrida entre ${player1.Nome} e ${player2.Nome} começando... \n`)

    await playRaceEngine(player1, player2)
}

main()