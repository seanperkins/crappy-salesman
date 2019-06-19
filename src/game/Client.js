import {Client} from 'boardgame.io/react'
import game from './index'

export default Client({
  game,
  // ai,
  multiplayer: {
    server: 'localhost:8000'
  },
  // debug: false,
})