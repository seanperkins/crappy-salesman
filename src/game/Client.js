import {Client} from 'boardgame.io/react'
import game from './index'
import Screen from '../ui/Screen'

export default Client({
  game,
  board: Screen,
  // ai,
  multiplayer: {
    server: 'localhost:8000'
  },
  debug: false,
})
