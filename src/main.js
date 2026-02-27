const player1 = {
    Name: "Mario",
    Velocidade: 4,
    Manobrabilidade: 3,
    Poder: 3,
    Pontos: 0,
};

const player2 = {
    Name:  "Luigi",
    Velocidade: 3,
    Manobrabilidade: 4,
    Poder: 4,
    Pontos: 0,
};

//console.log(player1, player2);

async function rollDice(){
    return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock(){
    let random = Math.random()
    let  result

    switch (true) {
        case random < 0.33:
            result =  "RETA"
            break;
        case random < 0.66:
            result =  "CURVA"
            break
        default:
            result =  "CONFRONTO"
    }
    return result
}

async function logRollResult(characterName, block, diceResult, attibute) {
    console.log(`${characterName} rolou um dado de ${block} ${diceResult}  + ${attibute} = ${diceResult + attibute }`)
}

async function playRaceEngine(character1, character2){
    for (let round = 1; round <= 5; round++) {
        console.log (`🚦 Rodada ${round}`);

        let block = await getRandomBlock()
        console.log( `Bloco: ${block}` )
        let  diceResult1 = await  rollDice();
        let  diceResult2 = await  rollDice();


        let  totalTestSkill1 = 0;
        let  totalTestSkill2 = 0;

        if (block ===  "RETA"){
            totalTestSkill1 = diceResult1 + character1.Velocidade;
            totalTestSkill2 = diceResult2 + character2.Velocidade;

            await logRollResult(character1.Name,  "Velocidade", diceResult1, character1.Velocidade);
            await logRollResult(character2.Name,  "Velocidade", diceResult2, character2.Velocidade);



        }
        if (block === "CURVA") {
            totalTestSkill1 = diceResult1 + character1.Manobrabilidade;
            totalTestSkill2 = diceResult2 + character2.Manobrabilidade

            await logRollResult(character1.Name,  "Manobrabilidade", diceResult1, character1.Manobrabilidade);
            await logRollResult(character2.Name,  "Manobrabilidade", diceResult2, character2.Manobrabilidade);
        }
        if (block ===  "CONFRONTO") {
            let powerResult1 = diceResult1 + character1.Poder;
            let powerResult2 = diceResult2 + character2.Poder;

            console.log(`${character1.Name} confrontou com ${character2.Name}!`);

            await logRollResult(character1.Name,  "Poder", diceResult1, character1.Poder);
            await logRollResult(character2.Name,  "Poder", diceResult2, character2.Poder);

            character2.Pontos -= powerResult1 > powerResult2 && character2.Pontos > 0 ? 1 : 0;
            character1.Pontos -= powerResult2 > powerResult1 && character1.Pontos > 0 ? 1 : 0;

            console.log(
                powerResult2 === powerResult1 ?  "Confronto empatado! Nenhum ponto foi perdido" :  ""
            );

       }

        if (totalTestSkill1 > totalTestSkill2) {
            console.log(`${character1.Name} marcou um ponto!`);
            character1.Pontos++;
        } else if (totalTestSkill2 > totalTestSkill1) {
            console.log(`${character2.Name} marcou um ponto!`);
            character2.Pontos++;
        }
            console.log("___________________________________________")
    }


}

async function declareWinner(character1, character2){
    console.log("Resultado Final:");
    console.log(`${character1.Name}: ${character1.Pontos} ponto(s)`);
    console.log(`${character2.Name}: ${character2.Pontos} ponto(s)`);

    if (character1.Pontos > character2.Pontos){
        console.log(`\n${character1.Name} venceu a Corrida! Parabéns!`)
    } else if  (character2.Pontos > character1.Pontos) {
        console.log(`\n${character2.Name} venceu a Corrida! Parabéns!`)
    } else {
        console.log( "A corrida terminou empatada!")
    }
}

async function main(){
    console.log(`🏁🚗Corrida entre ${player1.Name} e ${player2.Name} começando... \n`)

    await playRaceEngine(player1, player2)
    await declareWinner(player1, player2)
}

main()