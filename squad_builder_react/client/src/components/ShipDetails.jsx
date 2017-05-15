import React from 'react'

class ShipDetails extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      pilotedShip: props.ship,
      expanded: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState({expanded: !this.state.expanded})
  }

  render(){
    if(this.state.expanded){
      return(
        <div onClick={this.handleClick} className="ship-container">
          <p>{this.state.pilotedShip.ship.name} - {this.state.pilotedShip.pilot.name}</p>
          <p>{this.state.pilotedShip.ship.stats}</p>
        </div>
      )
    } else {
      return(
        <div onClick={this.handleClick} className="ship-container">
          <p>{this.state.pilotedShip.ship.name} - {this.state.pilotedShip.pilot.name}</p>
        </div>
      )
    }
  }
}

export default ShipDetails