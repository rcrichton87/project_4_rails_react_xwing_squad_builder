import React from 'react'
import PilotedShip from '../models/PilotedShip'
import UpgradeSelector from '../components/UpgradeSelector'

class ShipDetails extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      pilotedShip: new PilotedShip(props.ship),
      expanded: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.deleteShip = this.deleteShip.bind(this)
  }

  handleClick(){
    this.setState({expanded: !this.state.expanded})
  }

  deleteShip(event){
    console.log(this)
    this.props.handleDelete(event.target.value)
  }

  render(){

    const pilotedShip = this.state.pilotedShip

    const upgradeSlots = pilotedShip.ship.upgrade_slots.split(",")
    const upgradeObjects = this.state.pilotedShip.upgrades.map( (appliedUpgrade) => {
      return({applied: false, appliedUpgrade})
    })

    let displayedUpgrades =[]

    upgradeSlots.forEach((slot, index) => {
      let slotTaken = false
       upgradeObjects.forEach( (upgradeObject) => {
        console.log(upgradeObject)
        if(upgradeObject.appliedUpgrade.upgrade.slot === slot && !upgradeObject.applied){
          displayedUpgrades.push(<UpgradeSelector key={index} pilotedShip={pilotedShip} index={index} upgrade={upgradeObject.appliedUpgrade} slot={slot} />)
          slotTaken = true
          upgradeObject.applied = true
        }
      })
       if(!slotTaken){
        displayedUpgrades.push(<UpgradeSelector key={index} pilotedShip={pilotedShip} index={index} slot={slot} />)
       }
    })

    const basicDetails = <div>
      <div className="ship-details-top" onClick={this.handleClick}>
        <p>{this.state.pilotedShip.ship.name} - {this.state.pilotedShip.pilot.name} - {this.state.pilotedShip.totalCost()}</p>
        </div>
      <button value={pilotedShip.id} onClick={this.deleteShip}>x</button>
    </div>

    if(this.state.expanded){
      return(
        <div className="ship-container-expanded">

          {basicDetails}
          <p>{this.state.pilotedShip.ship.stats}</p>
          <div className="upgrades-container">
            {displayedUpgrades}
          </div>
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