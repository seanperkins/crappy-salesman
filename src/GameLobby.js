import React, {useState} from 'react'

const LobbyView = (props) => {
  console.log(props)
  const [playerName, setPlayerName] = useState('Lin')
  const [gameID, setGameID] = useState('')
  const [error, setError] = useState(null)

  return (
    <div>
      { error && (<div>{error}</div>)}
      <div className="joinGame">
        <h3>Join Game</h3>
        <label>
          Name:
          <input
            type="text"
            name="playerName"
            value={playerName}
            onChange={(evt) => {
              setPlayerName(evt.target.value)
            }}
          />
        </label>
        <label>
          GameID:
          <input
            type="text"
            name="gameID"
            value={gameID}
            onChange={(evt) => {
              setGameID(evt.target.value)
            }}
          />
        </label>
        <button
          onClick={async () => {
            let response = await fetch(`http://localhost:8000/games/default/${gameID}`)
            if (!response.ok) {
              setError(response.statusText)
              return
            }
            const { players } = await response.json()

            const availableSpots = players.filter((p) => !p.name)
            if (availableSpots.length === 0) setError("cannot join full game")
            response = await fetch(`http://localhost:8000/games/default/${gameID}/join`, {
              method: 'post',
              headers:{'content-type': 'application/json'},
              body: JSON.stringify({
                playerID: availableSpots[0].id.toString(),
                playerName: playerName
              })
            })
            if (!response.ok) {
              setError(response.statusText)
              return
            }
            //eslint-disable-next-line
            location.href = `http://localhost:3000/games/${gameID}/${availableSpots[0].id}`
          }}
        >
          Join Game
        </button>
      </div>
      <br/>
      <br/>
      <br/>
      <div className="createGame">
        <h3>Create Game</h3> 
        <label>
          Name:
          <input
            type="text"
            name="playerName"
            value={playerName}
            onChange={(evt) => {
              setPlayerName(evt.target.value)
            }}
          />
        </label>
        <button onClick={async () => {
          const response = await fetch('http://localhost:8000/games/default/create', {
            method: 'post',
            headers:{'content-type': 'application/json'},
            body: JSON.stringify({
              numPlayers: 4
            })
          })
          const body = await response.json()
          await fetch(`http://localhost:8000/games/default/${body.gameID}/join`, {
            method: 'post',
            headers:{'content-type': 'application/json'},
            body: JSON.stringify({
              playerID: '0',
              playerName: playerName
            })
          })
          
          //eslint-disable-next-line
          location.href = `http://localhost:3000/games/${body.gameID}/0`
        }}>
          create game
        </button>
      </div>
    </div>
  )
}

export default LobbyView