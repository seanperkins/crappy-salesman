import React, {Component} from 'react'

import RoleSelection from './RoleSelection'
import WaitingOnJudge from './WaitingOnJudge'
import WaitingOnPlayers from './WaitingOnPlayers'
import ProductSelection from './ProductSelection'
import ProductSelectionConfirmed from './ProductSelectionConfirmed'
import SelectWinner from './SelectWinner'

export default class Screen extends Component {

  isJudge = () => {
    const {ctx: {currentPlayer}, playerId} = this.props
    return currentPlayer === playerId
  }

  isConfirmed = () => {
    const {playerID, G: {players}} = this.props
    return players[playerID].confirmed
  }

  render() {
    console.log(this.props)
    const {
      ctx: {phase},
    } = this.props
    // Role Selection Player & Role Selection Judge
    if (phase === 'roleSelection' && this.isJudge) {
      return <RoleSelection {...this.props}/>
    }
    if (phase === 'roleSelection' && !this.isJudge) {
      return <WaitingOnJudge {...this.props}/>
    }

    // Product Selection Player & Product Selection Judge
    if (phase === 'productSelection' && this.isJudge) {
      return <WaitingOnPlayers {...this.props}/>
    }

    if (phase === 'productSelection' && !this.isJudge && !this.confirmed) {
      return <ProductSelection {...this.props}/>
    }

    if (phase === 'productSelection' && !this.isJudge && this.confirmed) {
      return <ProductSelectionConfirmed {...this.props}/>
    }

    // Select Winner Player & Select Winner Judge
    if (phase === 'selectWinner' && this.isJudge) {
      return <SelectWinner {...this.props}/>
    }
    if (phase === 'selectWinner' && !this.isJudge) {
      return <ProductSelectionConfirmed {...this.props}/>
    }
    return <div>Screen</div>
  }
}
