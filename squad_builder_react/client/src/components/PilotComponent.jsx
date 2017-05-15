import React from 'react'

class PilotComponent extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      pilot: this.props.pilot,
      ship: this.props.ship
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.props.handleClick(this.state.pilot, this.state.ship)
  }

  render(){
    return(
      <div>
        <p onClick={this.handleClick}>{this.state.pilot.name} - {this.state.pilot.cost + this.state.ship.cost}</p>
      </div>
    )
  }
}

export default PilotComponent