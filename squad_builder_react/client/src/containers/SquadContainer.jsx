import React from 'react'

class SquadContainer extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      squad: props.squad
    }
  }

  render(){

    const ships = this.state.squad.piloted_ships.map((pilotedShip, index) => {
      return(
        <li key={index}>{pilotedShip.ship.name} - {pilotedShip.pilot.name}</li>
      )
    })

    return(
      <div className="squad-container">
        <p>{this.state.squad.name}</p>
        <ul>
          {ships}
        </ul>
      </div>
    )
  }
}

export default SquadContainer