import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Client from './game/Client'
import LobbyView from './GameLobby'

import './index.scss'

const ClientWrapper = (props) => {
  console.log(props)
  const {match: {params}} = props
  if (!params.gameID) return null 
  
  return <Client gameID={params.gameID} playerID={params.playerID} />
}

export const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={LobbyView}/>
      <Route path="/games/:gameID/:playerID" component={ClientWrapper}/>
    </Switch>
  </BrowserRouter>
)
