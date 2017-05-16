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

    const pilotedShip = this.state.pilotedShip

    const upgradeSlots = pilotedShip.ship.upgrade_slots.split(",")
    const upgradeObjects = this.state.pilotedShip.upgrades.map( (appliedUpgrade) => {
      return({applied: false, appliedUpgrade})
    })

    let displayedUpgrades =[]

    upgradeSlots.forEach((slot) => {
      let slotTaken = false
       upgradeObjects.forEach( (upgradeObject) => {
        console.log(upgradeObject)
        if(upgradeObject.appliedUpgrade.upgrade.slot === slot && !upgradeObject.applied){
          displayedUpgrades.push(upgradeObject.appliedUpgrade.upgrade.name)
          slotTaken = true
        }
      })
       if(!slotTaken){
        displayedUpgrades.push(slot)
       }
    })

    const basicDetails = <div className="ship-details-top" onClick={this.handleClick}>
      <p>{this.state.pilotedShip.ship.name} - {this.state.pilotedShip.pilot.name} - {this.state.pilotedShip.totalCost()}</p>

      <form action={"http://localhost:5000/api/squads/" + this.props.squadId + "/delete_ship/" + this.state.pilotedShip.id} method="post">
        <input type="submit" value="x"/>
      </form>
    </div>

    if(this.state.expanded){
      return(
        <div className="ship-container-expanded">

          {basicDetails}
          <p>{this.state.pilotedShip.ship.stats}</p>
          {displayedUpgrades}
        </div>
      )
    } else {
      return(
        <div className="ship-container">
          {basicDetails}
        </div>
      )
    }
  }
}

export default ShipDetails