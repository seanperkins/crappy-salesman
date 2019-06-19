import React from 'react'
import {Lobby} from 'boardgame.io/react'

import game from './game'
import Screen from './ui/Screen'

const LobbyView = () => (
  <div>
    <h1>Lobby</h1>
    <Lobby
      gameServer={`http://localhost:8000`}
      lobbyServer={`http://localhost:8000`}
      gameComponents={[{
        game,
        boardClient: Screen,
      }]}
    />
  </div>
)

export default LobbyView