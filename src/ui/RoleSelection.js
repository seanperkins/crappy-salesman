import React, {Component} from 'react'

import SelectItem from './SelectItem'
import Footer from './Footer'

export default class RoleSelection extends Component {

  render() {
    console.log(this.props)
    return (
      <React.Fragment>
        <header>
          <h1>You're the Customer</h1>
          <p>Choose your persona for the salespeople to sell to</p>
        </header>
        <section className="ui-section">
          <SelectItem>Rick</SelectItem>
          <SelectItem>Sean</SelectItem>
          <SelectItem>Lin</SelectItem>
          <SelectItem>Chris</SelectItem>
        </section>
        <Footer>
          <button>Confirm</button>
        </Footer>
      </React.Fragment>
    )
  }
}
