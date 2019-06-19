import {shuffle} from 'lodash'
import {Game, TurnOrder} from 'boardgame.io/core'
import roleCards from './roleCards'
import productCards from './productCards'

const game = Game({
  setup: (ctx) => ({
    currentRole: null,
    currentRoleHand: shuffle(roleCards).slice(0, 8),
    players: passOutCards(ctx)
  }),
  moves: {
    pickRole: (G) => {

    },
    pickProduct: (G) => {

    },
    pickWinner: (G) => {

    },
  },
  flow: {
    startingPhase: 'roleSelection',
    phases: [
      {
        name: 'roleSelection',
        // judge is currentPlayer,
        // judge picks a role,
        turnOrder: TurnOrder.DEFAULT, //@todo figure out
        next: 'pickingProduct'
        // Turn is complete after judge picks a role
      },
      {
        name: 'pickingProduct',
        // selling active players pitch their cards
        next: 'pickWinner',
        // Turn is complete when everyone has picked their cards
      },
      {
        name: 'pickWinner'
        // Turn is complete when judge picks a winner
      }
    ]
  }
})

const passOutCards = (ctx) => {
  const {numPlayers} = ctx
  const players = {}
  // return players object with all cards in hand
  for(let i = 0; i < numPlayers; i++) {
    players[i] = {
      // pick first 8 cards after shuffle
      score: 0,
      productCards: shuffle(productCards).slice(0, 8)
    }
  }

  return players
}

export default game