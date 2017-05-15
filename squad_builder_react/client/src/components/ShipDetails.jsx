import React from 'react'
import PilotedShip from '../models/PilotedShip'

class ShipDetails extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      pilotedShip: new PilotedShip(props.ship),
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
        <div onClick={this.handleClick} className="ship-container-expanded">
          <p>{this.state.pilotedShip.ship.name} - {this.state.pilotedShip.pilot.name} - {this.state.pilotedShip.totalCost()}</p>
          <p>{this.state.pilotedShip.ship.stats}</p>
        </div>
      )
    } else {
      return(
        <div onClick={this.handleClick} className="ship-container">
          <p>{this.state.pilotedShip.ship.name} - {this.state.pilotedShip.pilot.name} - {this.state.pilotedShip.totalCost()}</p>
        </div>
      )
    }
  }
}

export default ShipDetails