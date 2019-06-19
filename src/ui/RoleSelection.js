import React, {Component} from 'react'

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
          <div className="select-item">
            <h2>Rick</h2>
          </div>
          <div className="select-item is-selected">
            <h2>Sean</h2>
          </div>
          <div className="select-item">
            <h2>Lin</h2>
          </div>
          <div className="select-item">
            <h2>Chris</h2>
          </div>
        </section>
      </React.Fragment>
    )
  }
}
