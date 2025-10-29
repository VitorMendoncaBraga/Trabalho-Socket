const net = require('net')
require('dotenv/config')

const candidates = new Map()

candidates.set("27", 0)
candidates.set("22", 0)
candidates.set("13", 0)
candidates.set("34", 0)
candidates.set("55", 0)
candidates.set("00", 0)

const server = net.createServer((socket) => {
    
    socket.on("data", (data) => {

        const vote = data.toString()

        if(!candidates.has(vote)){
            socket.write("Erro: Candidato inválido!")
            socket.end()
            return
            
        }

        candidates.set(vote, candidates.get(vote) + 1)

        socket.write("Voto computado com sucesso!")
        socket.end()

    })

    socket.on('close', () => {
        console.log('Cliente desconectado!')
    })

})

server.listen(process.env.PORT, () => {
    console.log(`Servidor ouvindo em ${process.env.HOST}:${process.env.PORT}`)
})

module.exports = candidates