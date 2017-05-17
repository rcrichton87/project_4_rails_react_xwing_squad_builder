import React from 'react'
import PilotedShip from '../models/PilotedShip'

class SquadListDetails extends React.Component {

  constructor(props){
    super(props)
    this.displaySquad = this.displaySquad.bind(this)
  }

  displaySquad(){
    window.location.replace("http://localhost:3000/#/squads/show/" + this.props.squad.id)
  }

  render(){
    const squad = this.props.squad
    
    let  cost = 0 
    const pilots = squad.piloted_ships.map( (pilotedShip, index) => {
      let ship = new PilotedShip(pilotedShip)
      cost += ship.totalCost()
      return (
        <p key={index}>{pilotedShip.pilot.name}</p>
      )
    })

    return(
      <div className="squad-list-details" onClick={this.displaySquad}>
        <p>{squad.name} - {cost} - {squad.faction}</p>
        <div className="pilots">
          {pilots}
        </div>
      </div>
    )
  }

}

export default SquadListDetails