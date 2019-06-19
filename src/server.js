const {Server} = require('boardgame.io/server')
const game = require('./game').default

const port = 8000

const server = Server({
  games: [game]
})

server.run({ port: 8000, lobbyConfig: {
  uuid: () => Math.trunc(Math.random()*10000).toString()
}})

console.log('Server running on port: ' + port)