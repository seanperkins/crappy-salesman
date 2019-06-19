import React, {Component} from 'react'

export default class SelectItem extends Component {

  render() {
    console.log(this.props)
    return (
      <button className="select-item">
        <h2>{this.props.children}</h2>
      </button>
    )
  }
}
