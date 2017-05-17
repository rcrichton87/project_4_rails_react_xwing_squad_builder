import React from 'react'
import PilotedShip from '../models/PilotedShip'
import UpgradeSelector from '../components/UpgradeSelector'

class ShipDetails extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      pilotedShip: props.ship,
      expanded: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.deleteShip = this.deleteShip.bind(this)
    this.updateUpgrades = this.updateUpgrades.bind(this)
  }

  handleClick(){
    this.setState({expanded: !this.state.expanded})
  }

  deleteShip(event){
    this.props.handleDelete(event.target.value)
  }

  updateUpgrades(upgrades){
    this.setState({pilotedShip: {pilot: this.state.pilotedShip.pilot, ship: this.state.pilotedShip.ship, applied_upgrades: upgrades}})
  }

  render(){
    let cost = this.state.pilotedShip.ship.cost + this.state.pilotedShip.pilot.cost
    this.state.pilotedShip.applied_upgrades.forEach((appliedUpgrade) => {
      cost += appliedUpgrade.upgrade.cost
    })

    const upgradeSlots = this.state.pilotedShip.ship.upgrade_slots.split(",")
    const upgradeObjects = this.state.pilotedShip.applied_upgrades.map( (appliedUpgrade) => {
      return({applied: false, appliedUpgrade})
    })

    let displayedUpgrades =[]

    upgradeSlots.forEach((slot, index) => {
      let slotTaken = false
       upgradeObjects.forEach( (upgradeObject) => {
        if(upgradeObject.appliedUpgrade.upgrade.slot === slot && !upgradeObject.applied){
          displayedUpgrades.push(<UpgradeSelector updateUpgrades={this.updateUpgrades} key={index} pilotedShip={this.state.pilotedShip} index={index} upgrade={upgradeObject.appliedUpgrade} slot={slot} />)
          slotTaken = true
          upgradeObject.applied = true
        }
      })
       if(!slotTaken){
        displayedUpgrades.push(<UpgradeSelector updateUpgrades={this.updateUpgrades} key={index} pilotedShip={this.state.pilotedShip} index={index} slot={slot} />)
       }
    })

    const basicDetails = <div className="ship-details-top">
      <div onClick={this.handleClick}>
        <p>{this.state.pilotedShip.ship.name} - {this.state.pilotedShip.pilot.name} - {cost}</p>
        </div>
      <button value={this.state.pilotedShip} onClick={this.deleteShip}>x</button>
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