const net = require("net");
require('dotenv/config')
const prompt = require('prompt-sync')();

let isVoteConfirmated = false;
const candidates = new Map()
candidates.set("27", 0)
candidates.set("22", 0)
candidates.set("13", 0)
candidates.set("34", 0)
candidates.set("55", 0)
candidates.set("00", 0)



async function vote() {
    console.clear()
    console.log("Bem vindo a urna eletrônica!");
    const userVote = prompt("Digite seu voto: ");

    if(!candidates.has(userVote)){
        console.log("Candidato inválido! Tente novamente!")
        setTimeout(vote, 2000)
        return
    }

     const isVoteConfirmated = prompt(`Deseja confirmar seu voto no candidato ${userVote}? (0 - Cancelar | 1 - Confirmar): `)
     
     if(isVoteConfirmated != "1"){ 
        console.log("Voto cancelado!")
        setTimeout(vote, 2000) 
        return 
    }

    const client = net.createConnection({port: process.env.PORT, host: process.env.HOST}, () => {
        client.write(userVote)
    })

    client.on('data', (data) => {
        console.log("Resposta do servidor: " + data)
       
    })

    client.on('close', () => {
        console.log("Conexão encerrada!")
    })
    
}

vote()


