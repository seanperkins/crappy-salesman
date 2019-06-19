import React from 'react'
import { Lobby } from 'boardgame.io/react'
import game from './game'

class BoardClient extends React.Component {
  render() {
    return (<div>WORK</div>)
  }
}

const LobbyView = () => (
  <div>
    <h1>Lobby</h1>
    <Lobby
      gameServer={`http://localhost:8000`}
      lobbyServer={`http://localhost:8000`}
      gameComponents={[{
        game,
        boardClient: BoardClient
      }]}
    />
  </div>
)

export default LobbyView