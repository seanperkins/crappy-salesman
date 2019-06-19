import React, {Component} from 'react'

export default class SelectItem extends Component {

  render() {
    console.log(this.props)
    return (
      <footer>
        {this.props.children}
      </footer>
    )
  }
}
