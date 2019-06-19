const {Server, lobbyConfig} = require('boardgame.io/server')
const game = require('./game')

const port = 8000

const server = Server({
  games: [game],
  lobbyConfig
})

server.run(port)

console.log('Server running on port: ' + port)
